import { profileLinks, site } from "../utils/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-mid bg-ink text-stone">
      <div className="section-inner flex flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-stone-mid">
            {site.role} · Philippines
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {profileLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="text-stone-mid transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-stone-mid sm:px-6 lg:px-8">
        © {year} {site.domain}
      </div>
    </footer>
  );
};

export default Footer;
