import { Project } from "@/types";

import angular from "./angular.png";
import arrow_down from "./arrow-down.png";
import arrow_left from "./arrow-left.png";
import azure from "./azure.png";
import brand_github from "./brand_github.png";
import change_theme_dark from './change-theme-dark.png';
import change_theme_light from './change-theme-light.png';
import csharp from "./csharp.png";
import css from "./css.png";
import docker from "./docker.png";
import dotnet from "./dotnet.png";
import figma from "./figma.png";
import git from "./git.png";
import github from "./github.png";
import globe from "./globe.png";
import html from "./html.png";
import instagram from "./instagram.png";
import javascript from "./javascript.png";
import linkedin from "./linkedin.png";
import logo from './logo.png';
import message from "./message.png";
import mongodb from "./mongodb.png";
import mysql from "./mysql.png";
import next from "./next.png";
import nodejs from "./nodejs.png";
import profile_image_2 from "./profile-image-2.jpg";
import profile_image from "./profile-image.jpg";
import reactjs from "./reactjs.png";
import redux from "./redux.png";
import sheridan from "./sheridan.png";
import tailwind from "./tailwind.png";
import tigercat from "./tigercat.jpg";
import tiktok from "./tiktok.png";
import typescript from "./typescript.png";
import youtube from "./youtube.png";

export const assets = {
	logo,
	change_theme_light,
	change_theme_dark,
	profile_image,
	github,
	instagram,
	tiktok,
	youtube,
	arrow_down,
	message,
	linkedin,
	css,
	html,
	javascript,
	next,
	nodejs,
	reactjs,
	arrow_left,
	globe,
	brand_github,
	azure,
	docker,
	git,
	angular,
	csharp,
	dotnet,
	figma,
	mongodb,
	mysql,
	redux,
	tailwind,
	typescript,
	tigercat,
	sheridan,
	profile_image_2
};

// Social media icons
export const socialIcons = [
	{
		src: youtube,
		alt: "YouTube",
		href: "https://www.youtube.com/@nickcarvalho8565"
	},
	{
		src: instagram,
		alt: "Instagram",
		href: "https://www.instagram.com/probablythatnickguy/"
	},
	{
		src: github,
		alt: "GitHub",
		href: "https://github.com/carvnich"
	}
];

// Stats
export const stats = [
	{
		number: "3+",
		label: "Years of Experience"
	},
	{
		number: "3+",
		label: "Major Releases"
	},
	{
		number: "4+",
		label: "Completed Projects"
	}
];

// Work Experience Data
export const workExperience = [
	{
		id: 1,
		title: "Web Applications Developer",
		company: "Tigercat Industries Inc.",
		location: "Paris, ON",
		startYear: "10/2022",
		endYear: "07/2025",
		icon: "tigercat",
		description: "Led full-stack development of enterprise applications serving 200+ users with C#/.NET Core and JavaScript. Designed and optimized SQL databases, improving system performance by 40% while building responsive web interfaces using HTML5, CSS3, React, and Angular. Developed RESTful APIs with JSON/XML for seamless application integration and mentored junior developers through code reviews and pair programming. Successfully deployed cross-platform mobile applications using React Native and implemented CI/CD pipelines with Azure DevOps for automated testing and deployment. Established security protocols, maintained high code quality standards, and delivered 3+ major software releases on schedule using agile methodologies while collaborating with cross-functional teams including engineers and business stakeholders."
	}
	// Add more work experiences here as needed
];

// Education Data
export const education = [
	{
		id: 1,
		degree: "Computer Programming Diploma",
		institution: "Sheridan College",
		startYear: "01/2020",
		endYear: "04/2022",
		location: "Oakville, ON",
		icon: "sheridan",
		description: "Comprehensive computer programming program focusing on modern web development technologies including HTML, CSS, JavaScript, and various frameworks. Gained expertise in database design and SQL programming, object-oriented programming principles, design patterns, and industry-standard version control practices. Developed strong foundation in team collaboration and software development methodologies essential for professional development environments."
	}
	// Add more education entries here as needed
];

// Hard Skills Data
export const hardSkills = [
	{
		id: 1,
		name: "Angular",
		title: "Angular",
		icon: assets.angular,
		alt: "angular",
	},
	{
		id: 2,
		name: "Azure",
		title: "Azure",
		icon: assets.azure,
		alt: "azure"
	},
	{
		id: 3,
		name: "C#",
		title: "C#",
		icon: assets.csharp,
		alt: "csharp",
	},
	{
		id: 4,
		name: "CSS",
		title: "CSS",
		icon: assets.css,
		alt: "css"
	},
	{
		id: 5,
		name: "Docker",
		title: "Docker",
		icon: assets.docker,
		alt: "docker"
	},
	{
		id: 6,
		name: ".NET",
		title: ".NET",
		icon: assets.dotnet,
		alt: "dotnet",
	},
	{
		id: 7,
		name: "Figma",
		title: "Figma",
		icon: assets.figma,
		alt: "figma",
	},
	{
		id: 8,
		name: "Git",
		title: "Git",
		icon: assets.git,
		alt: "git",
	},
	{
		id: 9,
		name: "HTML",
		title: "HTML",
		icon: assets.html,
		alt: "html"
	},
	{
		id: 10,
		name: "JavaScript",
		title: "JavaScript",
		icon: assets.javascript,
		alt: "javascript"
	},
	{
		id: 11,
		name: "MongoDB",
		title: "MongoDB",
		icon: assets.mongodb,
		alt: "mongodb",
	},
	{
		id: 12,
		name: "MySQL",
		title: "MySQL",
		icon: assets.mysql,
		alt: "mysql",
	},
	{
		id: 13,
		name: "Next.js",
		title: "Next.js",
		icon: assets.next,
		alt: "next",
		hasborder: true
	},
	{
		id: 14,
		name: "Node.js",
		title: "Node.js",
		icon: assets.nodejs,
		alt: "node"
	},
	{
		id: 15,
		name: "React",
		title: "React",
		icon: assets.reactjs,
		alt: "react"
	},
	{
		id: 16,
		name: "Redux",
		title: "Redux",
		icon: assets.redux,
		alt: "redux",
	},
	{
		id: 17,
		name: "Tailwind",
		title: "Tailwind",
		icon: assets.tailwind,
		alt: "tailwind",
	},
	{
		id: 18,
		name: "TypeScript",
		title: "TypeScript",
		icon: assets.typescript,
		alt: "typescript",
	}
];

// Soft Skills Data
export const softSkills = [
	{
		id: 1,
		name: "Leadership & Mentoring"
	},
	{
		id: 2,
		name: "Deadline Management"
	},
	{
		id: 3,
		name: "Creative Thinking"
	},
	{
		id: 4,
		name: "Problem Solving"
	},
	{
		id: 5,
		name: "Performance Optimization"
	},
	{
		id: 6,
		name: "Continuous Learning"
	}
];

// Projects
export const projects: Project[] = [
	{
		id: "taz-contracting",
		title: "Company landing page",
		src: "/taz-contracting.png",
		alt: "taz contracting",
		bgColor: "#3e5cf1",
		stack: [
			{
				name: "react",
				color: "text-blue-500",
			},
			{
				name: "typescript",
				color: "text-green-500",
			},
			{
				name: "tailwind",
				color: "text-pink-500",
			},
		],
		href: "https://taz-contracting.vercel.app/",
		github: "https://github.com/carvnich/TAZContracting",
		overview: "A sleek business website showcasing professional construction services with modern design, user-friendly navigation, and comprehensive service portfolio presentation.",
		challenge: "As my first major project, the biggest challenges were implementing smooth animations and creating a functional contact form with email integration. I learned how to work with animation libraries and integrate email services, which laid the foundation for my future development skills.",
		category: "frontend",
	},
	{
		id: "paris-indoor-soccer",
		title: "Soccer stats page",
		src: "/paris-indoor-soccer.png",
		alt: "paris indoor soccer",
		bgColor: "#fce1ea",
		stack: [
			{
				name: "react",
				color: "text-blue-500",
			},
			{
				name: "javascript",
				color: "text-green-500",
			},
			{
				name: "tailwind",
				color: "text-pink-500",
			},
		],
		href: "https://paris-indoor-soccer.vercel.app/",
		github: "https://github.com/carvnich/paris-indoor-soccer",
		overview: "A sports league management platform built with React and modern web technologies for seamless member experience, featuring user management and live updates.",
		challenge: "The main challenge was creating a flexible data structure that could dynamically adapt to multiple seasons with varying team compositions and schedules. I solved this by designing a scalable database schema and implementing dynamic components that could handle different season formats seamlessly.",
		category: "fullstack",
	},
	{
		id: "3d-portfolio",
		title: "3d portfolio",
		src: "/3d-portfolio.png",
		alt: "3d portfolio",
		bgColor: "#fcc372",
		stack: [
			{
				name: "nextjs",
				color: "text-blue-500",
			},
			{
				name: "typescript",
				color: "text-green-500",
			},
			{
				name: "tailwind",
				color: "text-pink-500",
			},
		],
		href: "https://nicholas-carvalho-developer-portfolio.vercel.app/",
		github: "https://github.com/carvnich/3d-developer-portfolio",
		overview: "An immersive 3D portfolio website featuring interactive animations and modern web technologies to create an engaging user experience that showcases my development skills.",
		challenge: "Learning Three.js and GSAP from scratch was quite challenging, especially coordinating complex 3D animations with smooth performance across different devices. I had to understand 3D concepts, animation timing, and optimization techniques to create fluid, interactive experiences without compromising loading speeds.",
		category: "frontend",
	},
];