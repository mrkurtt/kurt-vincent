import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "../components/SectionHeader";
import {
  featuredProjects,
  supportingProjects,
} from "../utils/projects";

const ProjectLink = ({ project, children, className = "" }) => {
  if (!project.link) {
    return <div className={className}>{children}</div>;
  }
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`group block ${className}`}
    >
      {children}
    </a>
  );
};

const FeaturedCard = ({ project }) => {
  return (
    <ProjectLink
      project={project}
      className="border border-stone-mid bg-stone-light transition-colors duration-300 hover:border-signal"
    >
      <div className="grid md:grid-cols-2">
        <div
          className={`relative min-h-[220px] overflow-hidden ${
            project.image ? "bg-ink" : "hero-atmosphere"
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full min-h-[220px] items-end p-6">
              <span className="font-display text-4xl font-bold text-white/90">
                {project.title}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">
              {project.role}
            </p>
            <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
              {project.title}
              {project.link && (
                <ArrowUpRightIcon className="h-5 w-5 text-ink-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
              )}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {project.description}
            </p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[11px] uppercase tracking-wider text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ProjectLink>
  );
};

const SupportCard = ({ project }) => {
  return (
    <ProjectLink
      project={project}
      className="border border-stone-mid bg-white/40 transition-colors duration-300 hover:border-signal"
    >
      {project.image && (
        <div className="aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-signal">
              {project.role}
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold text-ink">
              {project.title}
            </h3>
          </div>
          {project.link ? (
            <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-signal" />
          ) : (
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-ink-soft">
              {project.note}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[10px] uppercase tracking-wider text-ink-soft"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </ProjectLink>
  );
};

const Work = () => {
  return (
    <section id="work" className="section-pad bg-stone">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems that shipped"
          description="Featured platform work first — then production systems that show domain range."
        />

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.title} project={project} />
          ))}
        </div>

        <h3 className="mb-6 mt-16 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
          Supporting systems
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {supportingProjects.map((project) => (
            <SupportCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
