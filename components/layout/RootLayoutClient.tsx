'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import GlobalLoading from '@/app/loading'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AdminAuthProvider } from '@/contexts/AdminAuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

const queryClient = new QueryClient()

export function RootLayoutClient ({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')
  const [showIntro, setShowIntro] = useState(!isAdminRoute)

  // Simple behavior:
  // 1. On any non-admin page load, show intro immediately.
  // 2. Keep it for ~4.5 seconds.
  // 3. Then hide and show the site.
  useEffect(() => {
    if (isAdminRoute) {
      setShowIntro(false)
      return
    }

    setShowIntro(true)
    const timer = window.setTimeout(() => {
      setShowIntro(false)
    }, 4500) // 4.5 seconds

    return () => window.clearTimeout(timer)
  }, [isAdminRoute, pathname])

  const showIntroNow = showIntro && !isAdminRoute

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AdminAuthProvider>
          {showIntroNow
            ? <GlobalLoading />
            : (
              <div className='min-h-screen bg-background'>
                <Header />
                <main>{children}</main>
                <Footer />
              </div>
              )}
        </AdminAuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
