import SectionHeader from "../components/SectionHeader";
import { capabilities } from "../utils/capabilities";

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-pad bg-stone-light">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Capabilities"
          title="Where the stack is used"
          description="Grouped by the kind of engineering problem, and tied to the projects and roles where I have used them."
        />

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((group) => (
            <div key={group.domain}>
              <h3 className="border-b border-stone-mid pb-3 font-display text-lg font-semibold text-ink">
                {group.domain}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {group.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
