import SectionHeader from "../components/SectionHeader";
import { about } from "../utils/about";
import { site } from "../utils/site";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="section-pad bg-stone-light">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="About"
              title={about.heading}
              description={about.lede}
            />
            <div className="max-w-2xl space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-ink-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10 max-w-2xl border-t border-stone-mid pt-8">
              <h3 className="text-sm font-medium text-signal-dark">Education</h3>
              <p className="mt-3 font-display text-xl font-medium text-ink">
                {about.education.degree}
              </p>
              <p className="mt-1 text-ink-muted">{about.education.school}</p>
              <p className="mt-1 text-sm text-ink-soft">{about.education.detail}</p>
            </div>
          </div>
          <figure className="mx-auto w-48 lg:sticky lg:top-28 lg:mx-0 lg:w-full">
            <img
              src={profile}
              alt={`Portrait of ${site.name}`}
              width="702"
              height="800"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              {site.name}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
