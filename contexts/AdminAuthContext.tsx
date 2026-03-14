import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { AdminUser } from "@/lib/api/types";

interface AuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => false,
  logout: () => {},
});

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch("/api/admin/me", {
          method: "GET",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          if (data?.user) {
            setUser({
              id: data.user.id,
              fullName: data.user.fullName,
              email: data.user.email,
              password: "",
              role: "admin",
              isActive: true,
              createdAt: "",
              updatedAt: "",
            });
          }
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) return false;
      const data = await res.json();

      setUser({
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        password: "",
        role: "admin",
        isActive: true,
        createdAt: "",
        updatedAt: "",
      });
      return true;
    } catch {
      return false;
    }
  };

  const logout = () => {
    fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    }).catch(() => {});
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AuthContext);
}
