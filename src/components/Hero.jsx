import { site } from "../utils/site";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-atmosphere relative flex min-h-screen items-center overflow-hidden text-stone"
    >
      <div className="section-inner relative z-10 w-full px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.2em] text-signal">
          {site.domain}
        </p>
        <h1 className="animate-fade-up-delay mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
          {site.name}
        </h1>
        <p className="animate-fade-up-delay mt-5 font-mono text-sm uppercase tracking-wider text-stone-mid sm:text-base">
          {site.role}
          <span className="mx-2 text-signal">·</span>
          {site.tagline}
        </p>
        <p className="animate-fade-up-delay-2 mt-8 max-w-xl text-lg leading-relaxed text-stone/90 sm:text-xl">
          {site.summary}
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/#experience"
            className="inline-flex items-center bg-signal px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-signal-dark"
          >
            View experience
          </a>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center border border-stone-mid/50 px-6 py-3 font-mono text-xs font-medium uppercase tracking-wider text-stone transition-colors hover:border-signal hover:text-signal"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
