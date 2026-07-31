import { site } from "../utils/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-mid bg-ink text-stone">
      <div className="section-inner flex flex-col gap-6 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-stone-mid">
            {site.role} · {site.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-stone-mid transition-colors hover:text-signal"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-stone-mid transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-stone-mid transition-colors hover:text-signal"
          >
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center font-mono text-[11px] text-ink-soft sm:px-6 lg:px-8">
        © {year} {site.domain}
      </div>
    </footer>
  );
};

export default Footer;
