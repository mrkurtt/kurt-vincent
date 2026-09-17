const ProjectPlaceholder = ({ title, image, className = "" }) => {
  if (image) {
    return (
      <div
        className={`relative min-h-[220px] overflow-hidden bg-ink ${className}`}
      >
        <img
          src={image}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`hero-atmosphere relative flex min-h-[220px] items-end overflow-hidden p-6 sm:p-8 ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
          Screenshot placeholder
        </p>
        <p className="mt-2 font-display text-3xl font-bold text-white/90 sm:text-4xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProjectPlaceholder;
