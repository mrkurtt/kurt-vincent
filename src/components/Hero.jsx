import { site } from "../utils/site";

const Hero = () => {
  return (
    <section id="hero" className="relative border-b border-stone-mid bg-stone-light">
      <div className="section-inner px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <p className="text-sm font-medium text-signal-dark">
          {site.name}
          <span className="mx-2 text-ink-soft" aria-hidden="true">
            ·
          </span>
          Philippines
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {site.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {site.summary}
        </p>
        <p className="mt-5 max-w-xl border-l-2 border-signal-soft pl-4 text-sm leading-relaxed text-ink-muted">
          <span className="font-medium text-signal-dark">Availability</span>
          <span className="mt-1 block">{site.availability}</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View resume
          </a>
          <a href="/#work" className="btn-ghost">
            Explore projects
          </a>
          <a href="/#contact" className="btn-ghost">
            Contact me
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-signal-dark"
            >
              GitHub profile
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-ink-muted transition-colors hover:text-signal-dark"
            >
              LinkedIn profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
