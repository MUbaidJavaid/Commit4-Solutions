"use client";

import Link from "next/link";
import { ArrowUpRight, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Backend Development", href: "/services/backend" },
    { label: "Frontend Development", href: "/services/frontend" },
    { label: "Mobile Apps", href: "/services/mobile" },
    { label: "UI/UX Design", href: "/services/design" },
    { label: "AI Automation", href: "/services/ai" },
    { label: "SaaS Products", href: "/services/saas" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  Industries: [
    { label: "Fintech", href: "/industries" },
    { label: "Healthcare", href: "/industries" },
    { label: "Ecommerce", href: "/industries" },
    { label: "Education", href: "/industries" },
    { label: "Real Estate", href: "/industries" },
    { label: "SaaS", href: "/industries" },
  ],
  Resources: [
    { label: "Case Studies", href: "/work" },
    { label: "Hire Developers", href: "/hire" },
    { label: "Ecommerce", href: "/services/ecommerce" },
    { label: "CRM Solutions", href: "/services/crm" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      
      <div className="relative container-wide section-padding py-16 lg:py-20">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">C4</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Commit4Solutions</span>
            </div>
            <p className="text-sm font-body text-primary-foreground/55 leading-relaxed mb-6">
              We engineer digital products that drive growth. From concept to scale, we're the technology partner ambitious companies trust.
            </p>
            <Link href="/contact" className="btn-accent text-xs">
              Start a Project <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/5 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
                  <Icon className="w-4 h-4 text-primary-foreground/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-heading font-semibold text-sm mb-5 text-primary-foreground/90">{category}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm font-body text-primary-foreground/45 hover:text-primary-foreground/80 transition-colors duration-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-primary-foreground/35">
            © {new Date().getFullYear()} Commit4Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs font-body text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs font-body text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
