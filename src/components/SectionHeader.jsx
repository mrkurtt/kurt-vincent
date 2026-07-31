
const SectionHeader = ({ eyebrow, title, description, tone = "light" }) => {
  const isDark = tone === "dark";

  return (
    <header className="mb-12 max-w-2xl lg:mb-16">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            isDark ? "text-stone-mid" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
