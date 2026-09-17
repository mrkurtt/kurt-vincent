import SectionHeader from "../components/SectionHeader";
import { experience } from "../utils/experience";

const Experience = () => {
  return (
    <section id="experience" className="blueprint-grid section-pad">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Experience"
          title="Credibility built in production"
          description="Platform and product roles that sharpened the TypeScript stack — case studies cover products designed from scratch."
        />

        <ol className="relative space-y-0 border-l border-stone-mid pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-14 last:pb-0">
              <span
                className="absolute -left-[1.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-stone sm:-left-[2.05rem]"
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-ink-muted">
                    <span className="font-medium text-ink">{job.company}</span>
                    {job.product && (
                      <>
                        {" · "}
                        <a
                          href={job.product.url}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline text-signal"
                        >
                          {job.product.name}
                        </a>
                        <span className="text-ink-soft">
                          {" "}
                          — {job.product.blurb}
                        </span>
                      </>
                    )}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-ink-soft">
                  {job.period}
                  <span className="mx-2">·</span>
                  {job.location}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-4 text-base leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-signal"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
