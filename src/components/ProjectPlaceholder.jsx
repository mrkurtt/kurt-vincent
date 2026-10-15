const ProjectPlaceholder = ({
  title,
  image,
  alt,
  cover = false,
  className = "",
}) => {
  if (image && cover) {
    return (
      <div
        className={`relative h-64 w-full min-w-0 overflow-hidden bg-ink md:h-full md:min-h-[18rem] ${className}`}
      >
        <img
          src={image}
          alt={alt || `${title} product interface`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  if (image) {
    return (
      <div className={`min-w-0 overflow-hidden bg-ink ${className}`}>
        <img
          src={image}
          alt={alt || `${title} product interface`}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full max-w-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-[220px] w-full min-w-0 flex-col justify-end bg-ink p-6 text-stone sm:p-8 ${className}`}
    >
      <p className="text-sm font-medium text-signal-soft">Production system</p>
      <p className="mt-2 font-display text-3xl font-medium text-white">
        {title}
      </p>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-mid">
        A screenshot is not published for this project.
      </p>
    </div>
  );
};

export default ProjectPlaceholder;
