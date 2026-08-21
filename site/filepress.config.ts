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
		{ label: 'GitHub', href: github, icon: 'github' },
		{ label: 'AppFacts', href: 'https://appfacts.dev/v#af1.eNpVkM1qwzAQhF_FzFmJ6VXXQKEl7cW5hVI28lZRI0uLtHYxwe9e7PTS2_58zOzOHRPsk0GigWGhPAgXoVphoLOssyrsmrbRnGNIHgZVSccKC3IaJoZBDI5TXeG3l9ODcDfYOyIlP5JfN6dZuHMliJrmlSZ61DAoY9Kwub_nnvffdROYNzOLQ9fB4Jqr_vUxj_1XpMJYDHqWCnu-I8Hip1DykQsM5B_Z9CwxzwMn3d7A8mFwGUPs1xuF3I08fw6UyHOBhSQZVvXCkmvQXGZYXFWl2rb1Qa_jZe_y0B5IKc5Vd8-5eN4dj4f2EeBuS3D5BTp8dpc' },
		{ label: 'SkillFacts', href: 'https://skillfacts.dev/v#sf1.eNq1U01v20gM_SuEemkMy3ZzWCzU27bNothsESBBL1FgjCXaGkSaMWZGNoy2v6v3_WUlOfqwEwfYFigM29Ijh-Q8vvcl2SXZm2liVINJlhS1cnp9SNfa-ZBMkxJ3WNstOoq9U0HVBx_gyroNUnCHzmtrKLSYvZktCPFBhdYToIqgd5xT6wKN59L_fryj90dtSu7TOm9d6h91XRO6bd3WStZt69aqQKitKtMV0jRmA8r7ttkG6uVBmRIa7T3j2qytaxQHphAqNBT1e3TQmpJ-eRosj09zK2d3aJQpqNuXxNvW8VNShbD12Xy-0aFqV7PCNvP-vqncN72-fjcP2BAX6ZZKytSrWvvqHDnfpok2Pri2kL5Lh6qopGGFdOMsMdYwPQbD3rrHEVjrGj3VwabHqFSwtuYaa3RIgxOB9w_TZEW3rLFcKhc0cRZ8hHHjkMajXgFrbDC4w1i-RB-0UZEMSqfilW1wqzbHJMRr8i1nJAA65pDWo4OVUr9ClVN7OpmmaW5k50sZeNkpKIM8SihPcsNKzOBEiLkZdJjBKdO5OVcj6jCDKMPcdCrMgESYG9YgdTiSYG46BXKV3ytBHq-nPIPzjOdmJHzM-d98020GkWe5AYgq_6VKAIPKn1P_XOKxHWs8A5Ycv3YaH4FR4z32VOBS5v4hN880PkSizOV10PnY4ljnmeRv0KDjZciRkp4yuFxc_pEu_kwvF4x1GZYuWtGKU9WGyjosc1PQr-56D3WWe2Jx5FR0JCPGDQKsWl2H5erAmjplDtLh2H6_nxVdcM0x2QqLRMySm1dwy5XhikvTwSfGyM1XoA_9Ub58GZlM3veGmUwo_qR9l_M5OkcyxDp94FbsI3h0UB-4jj6SCFmph_8hQwl27CkO5mbycdRIak19gDuR1w1LHT5Z6DYMvnB6G_xbWmEU0LzTzXztQbTFV9cNlrOJ8PIKbqJn-e03e7brN7jqJd5vxWgU-GmnRSpveq-d3ZkMccRnx8uLwzCLhLMnYvlPkdET7Gow4xEsne7YlDCakuHXnHHRJfzVrW4w57OMD2LSlwa86317MtD7I-tSINaLQ4klJn_3DgR2INyLP8QeD6_Pu_EC_vtO05IdYXWA-1Nmx0PnvXhBcku-_QCqIkbL' }
	],
	topics: []
});
