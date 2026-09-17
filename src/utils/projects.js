import { caseStudies } from "./caseStudies";

/** Homepage cards — same three products as case studies. */
export const featuredProjects = caseStudies.map((study) => ({
  slug: study.slug,
  title: study.title,
  role: study.role,
  description: study.oneLiner,
  link: `/work/${study.slug}`,
  liveUrl: study.liveUrl,
  note: study.note,
  stack: study.stack.slice(0, 6),
}));

export const supportingProjects = [];
