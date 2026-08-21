#!/usr/bin/env node
/**
 * Copy each pass folder to the site (raw Markdown + one ZIP per pass).
 */
import {
	cpSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
	statSync,
	writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const passesDir = join(root, "passes");
const siteSkillsDir = join(root, "site", "static", "skills");

function crc32(buf) {
	let c = 0xffffffff;
	for (let i = 0; i < buf.length; i++) {
		c ^= buf[i];
		for (let j = 0; j < 8; j++) {
			c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
		}
	}
	return (c ^ 0xffffffff) >>> 0;
}

function writeStoreZip(entries, destPath) {
	const locals = [];
	const centrals = [];
	let offset = 0;

	for (const { name, data } of entries) {
		const nameBuf = Buffer.from(name, "utf8");
		const crc = crc32(data);
		const local = Buffer.alloc(30);
		local.writeUInt32LE(0x04034b50, 0);
		local.writeUInt16LE(20, 4);
		local.writeUInt16LE(0, 6);
		local.writeUInt16LE(0, 8);
		local.writeUInt16LE(0, 10);
		local.writeUInt16LE(0, 12);
		local.writeUInt32LE(crc, 14);
		local.writeUInt32LE(data.length, 18);
		local.writeUInt32LE(data.length, 22);
		local.writeUInt16LE(nameBuf.length, 26);
		local.writeUInt16LE(0, 28);

		const central = Buffer.alloc(46);
		central.writeUInt32LE(0x02014b50, 0);
		central.writeUInt16LE(20, 4);
		central.writeUInt16LE(20, 6);
		central.writeUInt16LE(0, 8);
		central.writeUInt16LE(0, 10);
		central.writeUInt16LE(0, 12);
		central.writeUInt16LE(0, 14);
		central.writeUInt32LE(crc, 16);
		central.writeUInt32LE(data.length, 20);
		central.writeUInt32LE(data.length, 24);
		central.writeUInt16LE(nameBuf.length, 28);
		central.writeUInt16LE(0, 30);
		central.writeUInt16LE(0, 32);
		central.writeUInt16LE(0, 34);
		central.writeUInt16LE(0, 36);
		central.writeUInt32LE(0, 38);
		central.writeUInt32LE(offset, 42);

		locals.push(local, nameBuf, data);
		centrals.push(central, nameBuf);
		offset += local.length + nameBuf.length + data.length;
	}

	const centralStart = offset;
	const centralSize = centrals.reduce((n, b) => n + b.length, 0);
	const eocd = Buffer.alloc(22);
	eocd.writeUInt32LE(0x06054b50, 0);
	eocd.writeUInt16LE(0, 4);
	eocd.writeUInt16LE(0, 6);
	eocd.writeUInt16LE(entries.length, 8);
	eocd.writeUInt16LE(entries.length, 10);
	eocd.writeUInt32LE(centralSize, 12);
	eocd.writeUInt32LE(centralStart, 16);
	eocd.writeUInt16LE(0, 20);

	mkdirSync(dirname(destPath), { recursive: true });
	writeFileSync(destPath, Buffer.concat([...locals, ...centrals, eocd]));
}

function walkFiles(dir, prefix = "") {
	const out = [];
	for (const name of readdirSync(dir).sort()) {
		if (name === ".DS_Store") continue;
		const abs = join(dir, name);
		const rel = prefix ? `${prefix}/${name}` : name;
		if (statSync(abs).isDirectory()) {
			out.push(...walkFiles(abs, rel));
		} else {
			out.push({ name: rel, data: readFileSync(abs) });
		}
	}
	return out;
}

const passes = readdirSync(passesDir)
	.filter((name) => statSync(join(passesDir, name)).isDirectory())
	.sort();

rmSync(siteSkillsDir, { recursive: true, force: true });
mkdirSync(siteSkillsDir, { recursive: true });

for (const pass of passes) {
	const src = join(passesDir, pass);
	cpSync(src, join(siteSkillsDir, pass), { recursive: true });
	const zipEntries = walkFiles(src).map(({ name, data }) => ({
		name: `${pass}/${name}`,
		data,
	}));
	writeStoreZip(zipEntries, join(siteSkillsDir, `${pass}.zip`));
}
