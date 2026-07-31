import SectionHeader from "../components/SectionHeader";
import { leadership } from "../utils/leadership";
import profile from "../assets/profile.jpg";

const Leadership = () => {
  return (
    <section id="leadership" className="section-pad bg-stone-light">
      <div className="section-inner">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Leadership"
              title="How I lead engineering"
              description="Tech Lead scope means raising the bar, owning the system, and accelerating the people around you."
            />
            <div className="space-y-10">
              {leadership.map((item, index) => (
                <article key={item.title} className="max-w-2xl">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <figure className="mx-auto w-48 lg:mx-0 lg:sticky lg:top-28 lg:w-full">
            <img
              src={profile}
              alt="Kurt Vincent Timajo"
              className="aspect-square w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              Kurt Vincent Timajo
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
