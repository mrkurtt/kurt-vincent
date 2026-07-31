import SectionHeader from "../components/SectionHeader";
import { capabilities } from "../utils/capabilities";

const Capabilities = () => {
  return (
    <section id="capabilities" className="section-pad bg-stone-light">
      <div className="section-inner">
        <SectionHeader
          eyebrow="Capabilities"
          title="Stack by domain"
          description="Architecture and delivery depth — not a beginner checklist."
        />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {capabilities.map((group) => (
            <div key={group.domain}>
              <h3 className="border-b border-stone-mid pb-3 font-display text-lg font-semibold text-ink">
                {group.domain}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
