import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "../components/SectionHeader";
import ProjectPlaceholder from "../components/ProjectPlaceholder";
import { featuredProjects } from "../utils/projects";

const ProjectActions = ({ project }) => {
  return (
    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
      <Link
        to={project.link}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-signal-dark"
      >
        Read the {project.title} case study
        <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-signal-dark"
        >
          Visit {project.liveLabel || "live website"}
          <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
};

const FeaturedCard = ({ project }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-stone-mid bg-white shadow-card">
      <div className="grid md:grid-cols-2">
        <ProjectPlaceholder
          title={project.title}
          image={project.image}
          alt={project.imageAlt}
          cover
          className="md:h-full"
        />
        <div className="min-w-0 p-6 sm:p-8">
          <div>
            <p className="text-sm font-medium text-signal-dark">
              {project.role}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
              {project.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {project.description}
            </p>
            <p className="mt-5 font-mono text-xs text-ink-soft">
              {project.stack.join(" · ")}
            </p>
            <ProjectActions project={project} />
          </div>
        </div>
      </div>
    </article>
  );
};

const Work = () => {
  return (
    <section id="work" className="section-pad bg-stone">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Selected projects"
          title="Production systems"
          description="Three freelance products I architected and developed. Open a case study for the architecture, the parts I owned, and what is actually running."
        />

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
