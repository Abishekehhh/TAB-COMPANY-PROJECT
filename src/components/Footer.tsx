import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-nav py-10 text-nav-foreground">
    <div className="container mx-auto px-4">
      <div className="mb-8 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="mb-1 text-lg font-bold" style={{ fontFamily: "Outfit, sans-serif" }}>
            TAB Technical Services
          </p>
          <p className="mb-3 text-xs opacity-70">Testing . Adjusting . Balancing</p>
          <p className="text-xs opacity-60">Independent HVAC testing and commissioning agency since 2022.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Quick Links</p>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/projects" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-xs opacity-70 transition-opacity hover:opacity-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Contact</p>
          <p className="mb-2 text-xs opacity-70">
            <a href="tel:+916380513174" className="hover:opacity-100">
              +91 6380513174
            </a>
          </p>
          <p className="mb-2 text-xs opacity-70">
            <a href="tel:+918848908880" className="hover:opacity-100">
              +91 8848908880
            </a>
          </p>
          <p className="text-xs opacity-70">
            <a href="mailto:tabtechnicalservice@gmail.com" className="hover:opacity-100">
              tabtechnicalservice@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-nav-foreground/10 pt-4 text-center">
        <p className="text-xs opacity-50">(c) {new Date().getFullYear()} TAB Technical Services. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
