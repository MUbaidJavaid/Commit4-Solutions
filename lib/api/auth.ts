import type { AdminUser } from "./types";

const SESSION_KEY = "cms_admin_session";

export function getSession(): AdminUser | null {
  try {
    const data = sessionStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setSession(user: AdminUser): void {
  const { password, ...safe } = user;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(safe));
}

export function clearSession(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}
