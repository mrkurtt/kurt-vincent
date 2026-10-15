/**
 * Portfolio facts and recruiter-facing copy.
 *
 * Edit this file when tailoring the site to a specific application.
 * Change `availability` to adjust the work-arrangement sentence in the hero
 * and contact section. Keep it accurate: based in the Philippines, open to
 * remote, hybrid, and on-site arrangements. Do not describe Kurt as based in Cebu.
 */
const prettyUrl = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export const site = {
  name: "Kurt Vincent Timajo",
  brand: "Kurt Vincent",
  role: "Backend Engineer",
  headline: "Backend Engineer building production-ready systems.",
  summary:
    "I build reliable APIs, data-driven applications, and cloud-deployed platforms using TypeScript, Node.js, and NestJS.",
  availability:
    "Open to software engineering opportunities in the Philippines, including hybrid and on-site roles in Cebu, as well as remote opportunities.",
  email: "kurttimajo.dev@gmail.com",
  phone: "+63 956-926-8559",
  phoneHref: "tel:+639569268559",
  github: import.meta.env.VITE_GITHUB || "https://github.com/mrkurtt",
  linkedin: import.meta.env.VITE_LINKEDIN || "https://linkedin.com/in/kurttimajo",
  resume: "/resume.pdf",
  domain: "kurttimajo.dev",
  url: "https://kurttimajo.dev",
  metaTitle: "Kurt Vincent Timajo · Backend Engineer",
  metaDescription:
    "Backend engineer in the Philippines. Production APIs and cloud-deployed platforms with TypeScript, Node.js, and NestJS — KourtSuite, Timpla, and Joesons Autoparts.",
};

export const profileLinks = [
  {
    label: "View resume",
    href: site.resume,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    display: site.email,
  },
  {
    label: "GitHub profile",
    href: site.github,
    display: prettyUrl(site.github),
    external: true,
  },
  {
    label: "LinkedIn profile",
    href: site.linkedin,
    display: prettyUrl(site.linkedin),
    external: true,
  },
  {
    label: "Phone",
    href: site.phoneHref,
    display: site.phone,
  },
];
