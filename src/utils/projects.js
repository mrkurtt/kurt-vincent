import Skedle from "../assets/projects/skedle.png";
import QRCAWEB from "../assets/projects/qrca-web.png";
import HRMSMobile from "../assets/projects/hrms-all.png";
import BantayTurista from "../assets/projects/bantayturista.png";
import Timpla from "../assets/projects/timpla.png";

export const featuredProjects = [
  {
    title: "Opexa",
    role: "Platform engineering · ScaleForge",
    description:
      "Next-generation iGaming platform. Led end-to-end features across NestJS microservices and Next.js using GraphQL, CQRS, and Event Sourcing for high fault-tolerance workflows.",
    link: "https://opexa.io",
    image: null,
    featured: true,
    stack: [
      "NestJS",
      "Next.js",
      "GraphQL",
      "CQRS",
      "Event Sourcing",
      "TypeScript",
    ],
  },
  {
    title: "Timpla.PH",
    role: "Software Engineering Lead",
    description:
      "Meal-kit operations platform. Own engineering for admin systems covering product, order, and inventory — Next.js, TypeScript, Node, AWS EC2, and GitHub Actions.",
    link: "https://timpla.ph",
    image: Timpla,
    featured: true,
    stack: ["Next.js", "TypeScript", "Node.js", "AWS EC2", "GitHub Actions"],
  },
];

export const supportingProjects = [
  {
    title: "Skedle",
    role: "Full stack",
    description:
      "Nurse scheduling system with customizable shifts, departments, and schedules for clinical operations.",
    link: "https://staging-skedle.vercel.app/",
    image: Skedle,
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "PNP QRCA",
    role: "Full stack",
    description:
      "QR code attendance system for tracking and managing police personnel attendance at scale.",
    link: "https://qrca-web-frontend.vercel.app/",
    image: QRCAWEB,
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    title: "Bantay Turista",
    role: "Mobile + backend",
    description:
      "QR-based tourist tracking for Camiguin Island with scanning and guiding features.",
    link: null,
    image: BantayTurista,
    stack: ["Flutter", "Laravel", "MySQL"],
    note: "Private deployment",
  },
  {
    title: "HRMS Mobile",
    role: "Mobile + backend",
    description:
      "Health-record mobile app giving barangay health workers reliable access to medical information in the field.",
    link: null,
    image: HRMSMobile,
    stack: ["Flutter", "Node.js", "Express", "MongoDB"],
    note: "Private deployment",
  },
];
