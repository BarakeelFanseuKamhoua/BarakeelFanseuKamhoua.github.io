
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Fanseu Kamhoua Barakeel",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Fanseu Kamhoua Barakeel",
	description: "A Computer Science and Engineering PhD student at HKUST.",
	image: profile.src,
	buttons: [
		{
			title: "Contact",
			link: "bfk@connect.ust.hk",
			isPrimary: false,
		},
		{
			title: "Github",
			link: "https://github.com/BarakeelFanseuKamhoua",
			isPrimary: false,
			// title: "Resume",
			// link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
			// isPrimary: false,
		},
		{
			title: "DBLP",
			link: "https://dblp.org/pid/267/1642.html",
			isPrimary: false,
		},
		{
			title: "LinkedIn",
			link: "https://hk.linkedin.com/in/barakeel-fanseu-kamhoua-812707172",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I am a Christian Cameroonian. I am a curent Computer Science and Engineering (CSE) student at the Hong Kong University of Science and Technology (HKUST) under Professor Huamin QU, starting August 2023. I hold a Master of Science in Industrial Engineering from HKUST, and a Batchelor of Technology in this same discipline from Nelson Mandela University (NMU).",
		"I have three years of research experience as a Research Assistant from the Chinese University of Hong Kong (CUHK) under professor James CHENG. I equally have industrial experience as a Software Engingeer specializing in R&D for algorithm developement and deployment in image processing for real-time embedded systems at Meridian Innovation (at HKSTP).",
		"When I’m not programming, reading papers, or trying to find a new idea, I love hanging out with peers, family, and freinds from church.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "CSE PhD Student",
			description: "I am pursuing a PhD in CSE, with focus in Data Visualization, Pattern Discovery, Artificial Inteligence, and Machine Learning.",
			icons: null,
		},
		// {
		// 	title: "Web Development",
		// 	description: "I create responsive static websites using Reactjs.",
		// 	icons: null,
		// }
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Hypergraph Convolution Based Attributed Hypergraph Clustering ",
			description: "1st Author. Published at CIKM 2021",
			icons: [
				{
					icon: faGoogle,
					link: "https://dl.acm.org/doi/10.1145/3459637.3482437",
				},
				{
					icon: faGithub,
					link: "https://github.com/BarakeelFanseuKamhoua/GRAC_CIKM",
				},
			]
		},
		{
			title: "GRACE: A General Graph Convolution Framework for Attributed Graph Clustering",
			description: "1st Author. Published at TKDD 2023",
			icons: [
				{
					icon: faGoogle,
					link: "https://dl.acm.org/doi/10.1145/3544977",
				},
				{
					icon: faGithub,
					link: "https://github.com/BarakeelFanseuKamhoua/GRACE",
				},
			]
		},
		{
			title: "Exact Shape Correspondence via 2D graph convolution",
			description: "1st Author. Published at NEURIPS 2022",
			icons: [
				{
					icon: faGoogle,
					link: "https://proceedings.neurips.cc//paper_files/paper/2022/hash/72d9a23e3895b5670e650c2e742065c9-Abstract-Conference.html",
				},
				{
					icon: faGithub,
					link: "https://github.com/BarakeelFanseuKamhoua/2D-GEM",
				},
			]
		},
		{
			title: "Improving Graph Representation Learning by Contrastive Regularization",
			description: "One of the Authors. On arxiv",
			icons: [
				{
					icon: faGoogle,
					link: "https://arxiv.org/abs/2101.11525",
				},
				{
					icon: faGithub,
					link: "",
				},
			]
		},
		{
			title: "Understanding Graph Neural Networks from Graph Signal Denoising Perspectives",
			description: "One of the Authors. On arxiv",
			icons: [
				{
					icon: faGoogle,
					link: "https://arxiv.org/abs/2006.04386",
				},
				{
					icon: faGithub,
					link: "https://github.com/guoji-fu/GSDN",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at bfk@connect.ust.hk.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:bfk@connect.ust.hk",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "mailto:bfk@connect.ust.hk",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Barakeel Fanseu Kamhoua | Computer Science and Engineering ",
	description: "PhD student HKUST. Focus on  Data Visualization, Pattern Discovery, Artificial Inteligence, Machine Learning",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@BarakeelFanseuKamhoua",
	description: "Computer Science and Engineering",
	cards: [
		{
			title: "My Website",
			link: "https://BarakeelFanseuKamhoua.github.io./",
		},
		{
			title: "My DBLP",
			link: "https://dblp.org/pid/267/1642.html",
		},
		{
			title: "My GitHub",
			link: "https://github.com/BarakeelFanseuKamhoua",
		},
		{
			title: "My LinkedIn",
			link: "https://hk.linkedin.com/in/barakeel-fanseu-kamhoua-812707172",
		},
		// {
		// 	title: "My LinkedIn",
		// 	link: "https://www.linkedin.com/in/hashirshoaeb/",
		// },
	]
}