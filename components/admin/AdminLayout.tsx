"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import {
  LayoutDashboard, FileText, FolderOpen, MessageSquare,
  Settings, LogOut, Menu, X, ChevronRight, Bell
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blog Posts", href: "/admin/posts", icon: FileText },
  { label: "Categories", href: "/admin/categories", icon: FolderOpen },
  { label: "Leads", href: "/admin/leads", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAdminAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.replace("/admin/login");
  };

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <span className="text-accent-foreground font-heading font-bold text-xs">N</span>
          </div>
          {sidebarOpen && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="font-heading font-bold text-white text-sm whitespace-nowrap overflow-hidden"
            >
              NexaBuild CMS
            </motion.span>
          )}
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body transition-all duration-200 group ${
              isActive(item.href)
                ? "bg-accent/15 text-accent font-medium"
                : "text-white/50 hover:text-white/80 hover:bg-white/5"
            }`}
          >
            <item.icon className={`w-4.5 h-4.5 shrink-0 ${isActive(item.href) ? "text-accent" : ""}`} />
            {(sidebarOpen || mobileOpen) && <span>{item.label}</span>}
            {isActive(item.href) && (sidebarOpen || mobileOpen) && (
              <ChevronRight className="w-3 h-3 ml-auto" />
            )}
          </Link>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="p-3 border-t border-white/5">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body text-red-400/70 hover:text-red-400 hover:bg-red-400/5 transition-all duration-200 w-full"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {(sidebarOpen || mobileOpen) && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[hsl(220,15%,10%)] flex">
      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 240 : 72 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:flex flex-col bg-[hsl(220,15%,12%)] border-r border-white/5 shrink-0 fixed inset-y-0 left-0 z-40"
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
            />
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed inset-y-0 left-0 w-60 bg-[hsl(220,15%,12%)] z-50 border-r border-white/5"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col min-h-screen transition-all duration-300"
        style={{ marginLeft: typeof window !== "undefined" && window.innerWidth >= 1024 ? (sidebarOpen ? 240 : 72) : 0 }}
      >
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-[hsl(220,15%,10%)]/90 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center justify-between px-4 lg:px-6 h-14">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (window.innerWidth < 1024) setMobileOpen(!mobileOpen);
                  else setSidebarOpen(!sidebarOpen);
                }}
                className="p-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-sm font-heading font-semibold text-white/80 hidden sm:block">
                {sidebarItems.find(i => isActive(i.href))?.label || "Admin"}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
              </button>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-[10px] font-heading font-bold text-accent">A</span>
                </div>
                <span className="text-xs font-body text-white/60 hidden sm:block">{user?.email}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
