import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ProjectPlaceholder from "../components/ProjectPlaceholder";
import {
  getAdjacentCaseStudies,
  getCaseStudy,
} from "../utils/caseStudies";

const CaseStudy = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <article className="bg-stone-light">
      <header className="hero-atmosphere section-pad text-stone">
        <div className="section-inner">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-mid transition-colors hover:text-signal"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            All work
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Case study
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-wider text-stone-mid">
            {study.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone/90">
            {study.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-signal px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-signal-dark"
              >
                {study.liveLabel || "Live site"}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ) : (
              <span className="font-mono text-xs uppercase tracking-wider text-stone-mid">
                {study.note || "Production"}
              </span>
            )}
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2">
            {study.stack.map((tech) => (
              <li
                key={tech}
                className="font-mono text-[11px] uppercase tracking-wider text-stone-mid"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="section-inner section-pad space-y-16 lg:space-y-20">
        <ProjectPlaceholder
          title={study.title}
          image={study.image}
          className="min-h-[280px] border border-stone-mid sm:min-h-[360px]"
        />

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {study.problem.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
            {study.problem.body}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {study.owned.title}
          </h2>
          <ul className="mt-6 max-w-3xl space-y-4">
            {study.owned.items.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-base leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-signal"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {study.architecture.title}
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {study.architecture.sections.map((section) => (
              <div
                key={section.heading}
                className="border border-stone-mid bg-white/40 p-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                  {section.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {study.decisions.title}
          </h2>
          <div className="mt-8 space-y-8 max-w-3xl">
            {study.decisions.items.map((item, index) => (
              <article key={item.heading}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {item.heading}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Stack
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {study.stack.map((tech) => (
              <li
                key={tech}
                className="border border-stone-mid bg-stone px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <nav className="flex flex-col gap-4 border-t border-stone-mid pt-10 sm:flex-row sm:justify-between">
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="group font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-signal"
            >
              <span className="text-ink-soft">Previous</span>
              <span className="mt-1 block font-display text-lg font-semibold normal-case tracking-tight text-ink group-hover:text-signal">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="group text-left font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-signal sm:text-right"
            >
              <span className="text-ink-soft">Next</span>
              <span className="mt-1 block font-display text-lg font-semibold normal-case tracking-tight text-ink group-hover:text-signal">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
};

export default CaseStudy;
