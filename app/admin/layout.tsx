"use client";

import { usePathname } from "next/navigation";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import AdminLayout from "@/components/admin/AdminLayout";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname?.startsWith("/admin/login");

  if (isLogin) {
    // Login page should not be wrapped in the admin shell or ProtectedRoute
    return <>{children}</>;
  }

  return (
    <ProtectedRoute>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedRoute>
  );
}

