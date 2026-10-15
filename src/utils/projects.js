import { caseStudies } from "./caseStudies";

const toCard = (study) => ({
  slug: study.slug,
  title: study.title,
  role: study.role,
  description: study.oneLiner,
  link: `/work/${study.slug}`,
  liveUrl: study.liveUrl,
  liveLabel: study.liveLabel,
  image: study.image,
  imageAlt: study.imageAlt,
  imageWidth: study.imageWidth,
  imageHeight: study.imageHeight,
  stack: study.cardStack,
});

export const featuredProjects = caseStudies
  .filter((study) => study.featured)
  .map(toCard);
