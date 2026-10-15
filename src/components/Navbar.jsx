import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../utils/nav";
import { site } from "../utils/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-stone-mid bg-stone-light">
      <nav
        className="section-inner flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
          onClick={close}
        >
          {site.brand}
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
          className="text-ink md:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-signal-dark"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="border-t border-stone-mid bg-stone-light px-4 py-2 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block py-3 text-base text-ink-muted"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="block py-3 text-base font-medium text-signal-dark"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
