"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Backend Development", desc: "Scalable APIs, microservices & cloud infrastructure", href: "/services/backend" },
  { title: "Frontend Development", desc: "Pixel-perfect interfaces with modern frameworks", href: "/services/frontend" },
  { title: "Mobile App Development", desc: "Native & cross-platform mobile experiences", href: "/services/mobile" },
  { title: "UI/UX Designing", desc: "Research-driven design that converts", href: "/services/design" },
  { title: "AI Automation", desc: "Intelligent workflows & machine learning solutions", href: "/services/ai" },
  { title: "SaaS Products", desc: "End-to-end SaaS product engineering", href: "/services/saas" },
  { title: "Ecommerce", desc: "High-performance online stores & marketplaces", href: "/services/ecommerce" },
  { title: "CRM Solutions", desc: "Custom CRM systems tailored to your business", href: "/services/crm" },
];

const whoWeServe = [
  { title: "Industries", desc: "Fintech, Healthcare, Ecommerce & more", href: "/industries" },
  { title: "Work Portfolio", desc: "Explore our categorized project showcase", href: "/work" },
];

const company = [
  { title: "About Us", desc: "Our story, mission & values", href: "/about" },
  { title: "Blog", desc: "Insights, guides & industry perspectives", href: "/blog" },
  { title: "Process", desc: "How we deliver exceptional results", href: "/process" },
  { title: "FAQ", desc: "Common questions answered", href: "/faq" },
  { title: "Careers", desc: "Join our growing team", href: "/careers" },
];

const navItems = [
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Our Work", href: "/work" },
  { label: "Why Us", href: "/why-us" },
  { label: "Who We Serve", dropdown: "whoWeServe" },
  { label: "Hire Dev", href: "/hire" },
  { label: "Company", dropdown: "company" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const getDropdownItems = (key: string) => {
    if (key === "services") return services;
    if (key === "whoWeServe") return whoWeServe;
    if (key === "company") return company;
    return [];
  };

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isDropdownActive = (key?: string) => {
    if (!key) return false;
    const items = getDropdownItems(key);
    return items.some((item) => pathname.startsWith(item.href));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-2xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide section-padding">
        <nav className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300">
              <span className="text-primary-foreground font-heading font-bold text-sm">C4</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground tracking-tight">
              Commit4Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.dropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-lg hover:bg-muted ${
                      isActive(item.href) ? "text-accent" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div layoutId="nav-indicator" className="absolute -bottom-1 left-3 right-3 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-body font-medium transition-colors duration-200 rounded-lg hover:bg-muted ${
                      isDropdownActive(item.dropdown) ? "text-accent" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.dropdown ? 'rotate-180' : ''}`} />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-popover/95 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-xl overflow-hidden ${
                        item.dropdown === "services" ? "w-[560px] p-3" : "w-[340px] p-2"
                      }`}
                    >
                      <div className={item.dropdown === "services" ? "grid grid-cols-2 gap-1" : "flex flex-col gap-0.5"}>
                        {getDropdownItems(item.dropdown).map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className={`flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-muted transition-all duration-200 group ${
                              location.pathname === sub.href ? "bg-green-light/50" : ""
                            }`}
                          >
                            <span className="text-sm font-body font-semibold text-foreground group-hover:text-accent transition-colors">{sub.title}</span>
                            <span className="text-xs font-body text-muted-foreground leading-snug">{sub.desc}</span>
                          </Link>
                        ))}
                      </div>
                      {item.dropdown === "services" && (
                        <div className="mt-2 pt-2 border-t border-border/50 px-4 pb-2">
                          <Link href="/services" className="text-xs font-body font-semibold text-accent hover:underline">
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:flex btn-primary text-xs">
              Book a Call
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-t border-border overflow-hidden"
          >
            <div className="section-padding py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-sm font-body font-medium rounded-xl hover:bg-muted transition-colors ${
                        isActive(item.href) ? "text-accent bg-green-light/30" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className={`flex items-center justify-between px-4 py-3 text-sm font-body font-medium rounded-xl hover:bg-muted transition-colors cursor-pointer list-none ${
                        isDropdownActive(item.dropdown) ? "text-accent" : "text-foreground"
                      }`}>
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-green-light pl-4">
                        {getDropdownItems(item.dropdown!).map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className={`block px-3 py-2.5 text-sm font-body rounded-lg transition-colors ${
                              location.pathname === sub.href
                                ? "text-accent font-semibold bg-green-light/30"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
              <Link href="/contact" className="btn-primary mt-4 text-center justify-center">
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
