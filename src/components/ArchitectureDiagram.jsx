const ArchitectureDiagram = ({ summary, layers }) => {
  return (
    <figure className="border border-stone-mid bg-white/60 p-5 sm:p-8">
      <figcaption className="font-mono text-xs uppercase tracking-[0.2em] text-signal-dark">
        System diagram
      </figcaption>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
        {summary}
      </p>
      <ol className="relative mt-8 space-y-6 border-l border-stone-mid pl-6 sm:pl-8">
        {layers.map((layer, index) => (
          <li key={layer.name} className="relative">
            <span
              className="absolute -left-[1.7rem] top-1 h-3 w-3 rounded-full border-2 border-signal-dark bg-stone-light sm:-left-[2.2rem]"
              aria-hidden="true"
            />
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ink">
              <span className="text-signal-dark" aria-hidden="true">
                0{index + 1}
                <span className="mx-2 text-ink-soft">/</span>
              </span>
              {layer.name}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <li
                  key={item}
                  className="border border-stone-mid bg-stone-light px-3 py-2 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
};

export default ArchitectureDiagram;
