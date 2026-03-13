 "use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      const from = encodeURIComponent(pathname || "/admin");
      router.replace(`/admin/login?from=${from}`);
    }
  }, [loading, user, router, pathname]);

  if (loading || (!user && typeof window !== "undefined")) {
    return (
      <div className="min-h-screen bg-[hsl(220,15%,12%)] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}

