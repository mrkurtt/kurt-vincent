import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import ProjectPlaceholder from "../components/ProjectPlaceholder";
import Seo from "../components/Seo";
import {
  getAdjacentCaseStudies,
  getCaseStudy,
} from "../utils/caseStudies";
import { site } from "../utils/site";

const BulletList = ({ items }) => (
  <ul className="mt-6 max-w-3xl space-y-4">
    {items.map((item) => (
      <li
        key={item}
        className="relative pl-4 text-base leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-signal-dark"
      >
        {item}
      </li>
    ))}
  </ul>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <article className="bg-stone-light">
      <Seo
        title={`${study.title} · ${site.name}`}
        description={study.metaDescription}
        path={`/work/${study.slug}`}
      />
      <header className="border-b border-stone-mid bg-stone px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="section-inner">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-signal-dark"
          >
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            Back to projects
          </Link>
          <p className="mt-8 text-sm font-medium text-signal-dark">Case study</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-4 text-sm text-ink-soft">{study.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {study.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Visit {study.liveLabel || "live website"}
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <p className="text-sm text-ink-soft">
                {study.note || study.overview.status}
              </p>
            )}
          </div>
          <p className="mt-8 font-mono text-xs text-ink-soft">
            {study.cardStack.join(" · ")}
          </p>
        </div>
      </header>

      <div className="section-inner section-pad space-y-16 lg:space-y-20">
        <ProjectPlaceholder
          title={study.title}
          image={study.image}
          alt={study.imageAlt}
          className="rounded-lg border border-stone-mid"
        />

        <section aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Overview
          </h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              ["What it does", study.overview.what],
              ["Who it serves", study.overview.who],
              ["Production status", study.overview.status],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-signal-dark">
                  {label}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {study.overview.context}
          </p>
        </section>

        <section aria-labelledby="contributions-heading">
          <h2
            id="contributions-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            My contributions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {study.contributions.summary}
          </p>
          <BulletList items={study.contributions.mine} />
        </section>

        <section aria-labelledby="architecture-heading">
          <h2
            id="architecture-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Technical architecture
          </h2>
          <div className="mt-8">
            <ArchitectureDiagram
              summary={study.diagram.summary}
              layers={study.diagram.layers}
            />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {study.architecture.map((section) => (
              <div
                key={section.heading}
                className="border border-stone-mid bg-white/40 p-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-signal-dark">
                  {section.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="challenges-heading">
          <h2
            id="challenges-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Engineering challenges
          </h2>
          <div className="mt-8 max-w-3xl space-y-8">
            {study.challenges.map((item, index) => (
              <article key={item.heading}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal-dark">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {item.heading}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="outcomes-heading">
          <h2
            id="outcomes-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Outcomes
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {study.outcomes.map((item) => (
              <li key={item.text} className="border border-stone-mid p-5">
                {item.estimate && (
                  <p className="font-mono text-[11px] uppercase tracking-wider text-signal-dark">
                    Estimate · subject to verification
                  </p>
                )}
                <p
                  className={`leading-relaxed text-ink ${
                    item.estimate ? "mt-2" : ""
                  }`}
                >
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="stack-heading">
          <h2
            id="stack-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Technology stack
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {study.stackGroups.map((group) => (
              <div key={group.label}>
                <h3 className="border-b border-stone-mid pb-3 font-mono text-xs uppercase tracking-[0.16em] text-signal-dark">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="links-heading">
          <h2
            id="links-heading"
            className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          >
            Links
          </h2>
          <ul className="mt-6 space-y-3 font-mono text-sm uppercase tracking-wider">
            {study.liveUrl && (
              <li>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-signal-dark"
                >
                  Live website
                  <span className="normal-case tracking-normal text-ink-muted">
                    {study.liveLabel}
                  </span>
                  <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            )}
            {study.repoUrl && (
              <li>
                <a
                  href={study.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-signal-dark"
                >
                  Source code
                  <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            )}
            <li>
              <Link to="/#work" className="text-ink-muted hover:text-signal-dark">
                Back to projects
              </Link>
            </li>
          </ul>
        </section>

        <nav
          aria-label="Other case studies"
          className="flex flex-col gap-6 border-t border-stone-mid pt-10 sm:flex-row sm:justify-between"
        >
          {prev ? (
            <Link
              to={`/work/${prev.slug}`}
              className="group font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-signal-dark"
            >
              <span className="text-ink-soft">Previous</span>
              <span className="mt-1 block font-display text-lg font-semibold normal-case tracking-tight text-ink group-hover:text-signal-dark">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/work/${next.slug}`}
              className="group font-mono text-xs uppercase tracking-wider text-ink-muted hover:text-signal-dark sm:text-right"
            >
              <span className="text-ink-soft">Next</span>
              <span className="mt-1 block font-display text-lg font-semibold normal-case tracking-tight text-ink group-hover:text-signal-dark">
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
