const SectionHeader = ({ eyebrow, title, description, tone = "light" }) => {
  const isDark = tone === "dark";

  return (
    <header className="mb-10 max-w-2xl lg:mb-14">
      {eyebrow && (
        <p
          className={`text-sm font-medium ${
            isDark ? "text-signal-soft" : "text-signal-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
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
