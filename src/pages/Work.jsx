import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionHeader from "../components/SectionHeader";
import ProjectPlaceholder from "../components/ProjectPlaceholder";
import { featuredProjects } from "../utils/projects";

const FeaturedCard = ({ project }) => {
  return (
    <Link
      to={project.link}
      className="group block border border-stone-mid bg-stone-light transition-colors duration-300 hover:border-signal"
    >
      <div className="grid md:grid-cols-2">
        <ProjectPlaceholder
          title={project.title}
          image={project.image}
          className="h-full"
        />
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-signal">
              {project.role}
            </p>
            <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-semibold text-ink">
              {project.title}
              <ArrowUpRightIcon className="h-5 w-5 text-ink-soft transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal" />
            </h3>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {project.description}
            </p>
            {project.note && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
                {project.note}
              </p>
            )}
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
    </Link>
  );
};

const Work = () => {
  return (
    <section id="work" className="section-pad bg-stone">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Selected work"
          title="Systems I designed from scratch"
          description="Three products as lead engineer — commerce, multi-tenant SaaS, and a payments hub. Open a case study for architecture and decisions."
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
