import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../utils/nav";
import { site } from "../utils/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-stone-mid/60 bg-stone-light/80 backdrop-blur-md">
      <div className="section-inner flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {site.brand}
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="text-ink md:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-signal"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="border-t border-stone-mid bg-stone-light px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="py-3">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-ink-muted"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
