import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/offerings", label: "Offerings" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="pt-10 pb-4">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <span className="font-serif text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight">
              Julia<br />Jarrold
              <span className="text-lg md:text-xl font-medium tracking-wide">, LCSW</span>
            </span>
          </Link>
        </div>
        <nav aria-label="Main navigation" className="flex justify-center gap-8 md:gap-12 font-serif text-base md:text-lg">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-opacity hover:opacity-70 pb-1 ${
                pathname === to ? "border-b border-foreground" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="py-16 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Julia Jarrold, LCSW. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
