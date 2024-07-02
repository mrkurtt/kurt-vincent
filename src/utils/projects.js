import { technologies } from './skills';
import Skedle from '../assets/projects/skedle.png';
import FureverFriends from '../assets/projects/fureverfriends.png/';
import QRCAWEB from '../assets/projects/qrca-web.png';
import InsightfulBlog from '../assets/projects/insightful.png';
import Oncass from '../assets/projects/oncass.png';
import JPrompt from '../assets/projects/jprompt.png';
import QRCAMobile from '../assets/projects/qrca-mobile-all.png';
import HRMSMobile from '../assets/projects/hrms-all.png';
import BantayTurista from '../assets/projects/bantayturista.png';

export const myprojects = [
	{
		title: 'Skedle',
		description:
			'A digital nurse scheduling web application where schedulers can customize shifts, departments, and schedules.',
		link: 'https://staging-skedle.vercel.app/',
		image: Skedle,
		techStack: [
			technologies.ReactJS,
			technologies.NodeJS,
			technologies.MongoDB,
			technologies.ExpressJS,
			technologies.Tailwind,
		],
	},
	{
		title: 'Fur-Ever Friends',
		description:
			'A user-friendly pet adoption application system designed to streamline the process of finding forever homes for pets.',
		link: 'https://fur-ever-friends-eight.vercel.app/',
		image: FureverFriends,
		techStack: [
			technologies.ReactJS,
			technologies.NodeJS,
			technologies.MongoDB,
			technologies.ExpressJS,
			technologies.Tailwind,
		],
	},
	{
		title: 'PNP QRCA',
		description:
			'A QR code attendance system designed to efficiently track and manage the attendance of police personnels.',
		link: 'https://qrca-web-frontend.vercel.app/',
		image: QRCAWEB,
		techStack: [
			technologies.ReactJS,
			technologies.NodeJS,
			technologies.MongoDB,
			technologies.ExpressJS,
			technologies.Tailwind,
		],
	},
	{
		title: 'Insightful Blog',
		description:
			'A blogging application designed to empower users to share their thoughts and stories with a wide audience.',
		link: 'https://insightful-blog.vercel.app/',
		image: InsightfulBlog,
		techStack: [
			technologies.ReactJS,
			technologies.NodeJS,
			technologies.MongoDB,
			technologies.ExpressJS,
			technologies.Tailwind,
		],
	},
	{
		title: 'ONCASS',
		description:
			'An online clinic appointment scheduling system designed to simplify the booking process for both patients and healthcare providers.',
		link: 'https://online-clinic-appointment-frontend.vercel.app/patient/login',
		image: Oncass,
		techStack: [
			technologies.ReactJS,
			technologies.Strapi,
			technologies.NodeJS,
			technologies.Tailwind,
		],
	},
	{
		title: 'JPrompt',
		description:
			'A journal prompt generator designed to inspire and motivate users to write with creativity and reflection.',
		link: 'https://jprompt-gen.vercel.app/',
		image: JPrompt,
		techStack: [technologies.ReactJS, technologies.Tailwind],
	},

	// MOBILE PROJECTS
	{
		title: 'Bantay Turista',
		description:
			'A QR code-based tourist tracking application for Camiguin Island with QR Code scanning and tourist guiding features.',
		link: '',
		image: BantayTurista,
		techStack: [technologies.Flutter, technologies.Laravel, technologies.MySQL],
	},
	{
		title: 'HRMS Mobile App',
		description:
			'Mobile app for managing health records, designed to provide BHWs with easy access to their medical information anytime, anywhere.',
		link: '',
		image: HRMSMobile,
		techStack: [
			technologies.Flutter,
			technologies.NodeJS,
			technologies.ExpressJS,
			technologies.MongoDB,
		],
	},
	{
		title: 'QRCA Mobile App',
		description:
			'PNP-QRCA is a mobile application utilizing QR code technology to efficiently track and manage police personnel attendance.',
		link: '',
		image: QRCAMobile,
		techStack: [
			technologies.Flutter,
			technologies.NodeJS,
			technologies.ExpressJS,
			technologies.MongoDB,
		],
	},
];
