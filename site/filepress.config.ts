import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/temper-pass';

export default defineFilepressConfig({
	title: 'TemperPass',
	description:
		'Most agents answer immediately and confidently. TemperPass makes them say what they\'re assuming first.',
	tagline: 'Tempered judgment for AI agents.',
	lede: 'For Cursor, Claude Code, and anything else that reads a SKILL.md file.',
	url: 'https://temperpass.dev',
	author: 'Catalyst Forge LLC',
	homePage: 'home',
	logo: '/logo.svg',
	ogImage: '/logo.svg',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Passes', href: '/passes' },
		{ label: 'Install', href: '/install' },
		{ label: 'Posts', href: '/writing' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	topics: []
});
