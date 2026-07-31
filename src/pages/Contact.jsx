import SectionHeader from "../components/SectionHeader";
import { site } from "../utils/site";

const Contact = () => {
  return (
    <section id="contact" className="section-pad bg-ink text-stone">
      <div className="section-inner">
        <SectionHeader
          tone="dark"
          eyebrow="Contact"
          title="Let's talk Tech Lead scope"
          description="Open to conversations about senior engineering and development leadership roles — systems ownership, team standards, and shipping with velocity."
        />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 font-mono text-sm">
            <a
              href={`mailto:${site.email}`}
              className="block text-lg text-white transition-colors hover:text-signal sm:text-xl"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="block text-stone-mid transition-colors hover:text-signal"
            >
              github.com/mrkurtt
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block text-stone-mid transition-colors hover:text-signal"
            >
              linkedin.com/in/kurttimajo
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-signal-dark"
            >
              Email me
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-stone-mid/40 px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-stone transition-colors hover:border-signal hover:text-signal"
            >
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
