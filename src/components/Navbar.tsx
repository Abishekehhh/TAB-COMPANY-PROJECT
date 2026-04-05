import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-nav/95 text-nav-foreground shadow-lg backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/image/favicon.ico"
            alt="TAB logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20 sm:h-12 sm:w-12"
          />
          <div className="min-w-0">
            <span className="block truncate text-base font-bold leading-tight sm:text-lg">TAB</span>
            <span className="block truncate text-[11px] uppercase tracking-[0.22em] opacity-80 sm:text-xs">
              Technical Services
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-opacity hover:opacity-100 ${
                  location.pathname === link.to ? "opacity-100 underline underline-offset-4" : "opacity-80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+916380513174"
          className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:flex"
        >
          <Phone size={14} />
          Call Us
        </a>
        <a
          href="https://chat.whatsapp.com/LbIjl9dvfdJ9CBNSe3cWJG?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-nav-foreground transition-opacity hover:opacity-90 md:flex"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full p-2.5 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-nav-foreground/10 bg-nav transition-[max-height,opacity] duration-200 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-base font-medium hover:bg-white/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:+916380513174"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone size={16} />
              Call Us
            </a>
          </li>
          <li>
            <a
              href="https://chat.whatsapp.com/LbIjl9dvfdJ9CBNSe3cWJG?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-nav-foreground"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
