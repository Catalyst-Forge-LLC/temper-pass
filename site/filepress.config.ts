import { defineFilepressConfig } from 'getfilepress';

const github = 'https://github.com/Catalyst-Forge-LLC/temper-pass';

export default defineFilepressConfig({
	title: 'TemperPass',
	description:
		'Most agents answer immediately and confidently. TemperPass instructs them to say what they\'re assuming first.',
	tagline: 'Tempered judgment for AI agents.',
	lede: 'Assumptions · scope · tradeoffs',
	url: 'https://temperpass.dev',
	author: 'Catalyst Forge LLC',
	homePage: 'home',
	logo: '/logo.png',
	ogImage: '/logo.png',
	nav: [
		{ label: 'Home', href: '/' },
		{ label: 'Passes', href: '/passes' },
		{ label: 'Get started', href: '/install' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'GitHub', href: github, icon: 'github' }
	],
	footerLinks: [
		{ label: 'See the rest of the Catalyst Forge shelf.', href: 'https://catalystforge.com/tools/' },
		{ label: 'RSS', href: '/rss.xml' },
		{ label: 'Posts', href: '/posts' },
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNpVkMtqw0AMRX_F3PUkptvZBgotaSkku1KKYqvjaeYhZmQXE_LvxU4W7U4Sh6MrXTDBPhgkigyLI0fh8ka1wkBnWWZVuGvaRnMOPjkYVCUdKyyoUz8xDILvONUFfnk63ojuDHtBoORGcqt6Fj50xYua5pkmutUwKGNSv25_zT1vv-sqmNdlFrvDAQZDrnrvQx77r0CFcTXoWSrs-wUJFj-FkgtcYCD_yKZnCXmOnHQ9A9cPg9PoQ79kFOrO5PgzUiLHBRaSJC72IUeWW_pBVaptW10fJFTrtudpSc-Sq9dc5j-U8zqMp22XY7sjpTBX3Tzm4niz3-_ujs0iwfUXX92DBw' },
		{ label: 'SkillFacts · clarify-first', href: 'https://skillfacts.dev/v#sf1.eNqdkTFrJDEMhf-KUe3ZTVq3gcBBrrp0IQStrZkx65EHSZ6whP3vwbOEpEh1nXmS3_P7_AEbhHsPjAtBgIeCkseLe8yiBh4SbVTqStJnaFguau6xykTgYSPRXBkC3B3uD3fgQQ2tKQTAaHnrOyVHYu3Wf_88g4dz5gQBYhOtMug5lwIe1iZr3bf-NRkxkisV03AilMyTQ9W2rJYrq0NObsmqXc88VlmwD7yzmdgh6zuJa5xIXH8NpZ-3e5TUjRg5EoQP0Nqkn2A2WzUcj1O2uZ0OsS7Hr77D3nd4eno4Gi0rybCi7lbtVLLOv8G5esisJi3uuW9CGOc9cKZSIABX7niY7L3K-VsYcyG9qNHypV09WK2le4wkxJEShJdXD6fGqVB6Q7E8YjS9yTQJqfYso0ILmVy-7ROpZcYbjPDyevUw14VWnH5CuNXsLQ-JNvAgtFbNVner_0Fl0jj234Bg0uj6Cdst3eY' },
		{ label: 'SkillFacts · red-team', href: 'https://skillfacts.dev/v#sf1.eNqdUD1rXDEQ_Ctia92d3aoLhkDAaYK7EIxO2ndPnLQrdlcvHOb-e9AzxilSpRuGYb7eYIPw6IFiQwjwA7N7wdjAQ8YNK3cUCPAULdabmvvKckHwsKFoYYIAD8fH4wN4UIs2FALEZGWbmloSkk7X799ewMO1UIYAaYiyHPRaagUPfUjnXfXFLKari64Ld9ZY3cLilljqEHSNM6p3hRLSDFDvImXXimqhi0tMahILmbozLizoErdWrCHZjBHekCIlhPAGykMmgtWsazidLsXWcT4mbqePrYd96-H5-elk2DrKoUfVvfG5Fl3_dczdQ5k9RrLCpK-CMa174Iq1QgBimtcQ2m-W6yexlIp6U8P2wd09GHOdHgsKUsIM4ecvD-dBuWJ-jWJlicn0ncaLoOrMMqzY0OT2aZ9RrVDcS0353cPKDXu8_H3C-8y58phxAw-CnbUY71b_c5XJoBRtVjcZeP8D15HZkA' },
		{ label: 'SkillFacts · scope-lock', href: 'https://skillfacts.dev/v#sf1.eNqdkEFrHDEMhf-K0dmzm1x9DRQK21N7KyV4PJoZsx7JSPI0S9j_HjxpSA899SYe4r3vvVfYITx6oLghBPieuKK7cLqChwl3LFxRIMBTtFhuau4Ly4LgYUfRzAQBHk6PpwfwoBatKQSIyfLef0pOSNp9v339AR6umSYIkJooy6DXXAp4qE0qH18919mKLtOgB0mkyXGzgec_wsiNpig3N7O46GrGhI5n95vl6kacWdDhS400ZVpctu4vvCNFSgjhFZSb9AtWs6rhfF6yrW08Jd7OHyWHo-RwuTydDbeKMtSoeqCOJev6r0XuHjKpSUuWmfRZMKb1CFyxFAhATH0TQuusn8KcC-pNDbcP7e7BmEv3mFGQEk4Qfv7yMDaaCk7PUSzPMZm-y7gIqvYsw4Ibmtw-7SdUyxQPqP5-97DyhjUuf4_wXrO3PE24gwfBypqND6v_mcqkUYrW0U0a3t8AvNzWkA' },
		{ label: 'SkillFacts · tradeoff-matrix', href: 'https://skillfacts.dev/v#sf1.eNqdkM1qKzEMhV_FaO0k7dbbQuFCu-uulOJ4NDMmHslI8jSh5N2LJ4TexV3dnTiI7_x8wwrh0QPFBSHAm8QBeRzdazTJZ_Aw4IqFKwoEeIoWy0XNPbNMCB5WFM1MEOBh_7h_AA9q0ZpCgJgsr_2n5ISkHf765w08nDINECA1UZadnnIp4KE2qbx9PbMkdJEcnmvJKZuze6hlC-W-ZiSXZmbNNLm4ME1uadZiKReH51Sa5hUdV8tM2uHCK1KkhBC-QblJv2A2qxoOhynb3I77xMvh3nC3Ndy9vDwdDJeKsqtRN1Q7lqzzv-a4esikJi1tvp-CMc2b4YylQABi6oMQ2hfL6VcYc0G9qOFy164ejLl0xoiClHCA8P7h4dhoKDh8RrE8xmR6k3ESVO1ehgUXNLn84gdUyxRvY4T3j6uHmRescfp7hFvN3nI_4AoeBCtrNt5Q_zOVSaMUrUc3aXj9ASoD2Vg' }
	],
	topics: []
});
