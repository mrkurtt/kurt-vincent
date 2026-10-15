import SectionHeader from "../components/SectionHeader";
import { profileLinks, site } from "../utils/site";

const Contact = () => {
  return (
    <section id="contact" className="section-pad bg-stone">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Contact"
          title="How to reach me"
          description="For backend, full-stack, and cloud-oriented software engineering roles."
        />
        <p className="mb-10 max-w-xl text-sm leading-relaxed text-ink-muted">
          {site.availability}
        </p>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <ul className="space-y-3 text-sm">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="text-ink-muted transition-colors hover:text-signal-dark"
                >
                  <span className="font-medium text-ink">{link.label}</span>
                  {link.display ? (
                    <span className="mt-0.5 block text-ink-soft sm:mt-0 sm:ml-3 sm:inline">
                      {link.display}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              Email me
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              View resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
