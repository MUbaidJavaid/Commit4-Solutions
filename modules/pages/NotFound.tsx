 "use client";

import Link from "next/link";
import { ArrowRight, Home, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingModularAccent } from "@/components/shared/ModularShapes";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <FloatingModularAccent className="absolute top-10 right-10 w-64 h-52 opacity-60" />
      <FloatingModularAccent className="absolute bottom-10 left-10 w-48 h-40 opacity-40 rotate-180" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-brand/4 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10 px-6 max-w-lg"
      >
        <motion.div
          className="text-8xl sm:text-9xl font-heading font-bold text-accent/15 mb-4 select-none"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          404
        </motion.div>
        <h1 className="text-2xl sm:text-3xl font-heading font-bold mb-3">Page not found</h1>
        <p className="text-base font-body text-muted-foreground mb-8 leading-relaxed">
          Looks like this module hasn't been built yet. Let's reconnect you to the main system.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/services" className="btn-outline">
            Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="btn-outline">
            <Mail className="w-4 h-4" /> Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
