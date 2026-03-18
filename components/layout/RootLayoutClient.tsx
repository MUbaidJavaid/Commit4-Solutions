'use client'

import CTASection from '@/components/layout/CTASection'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import GlobalLoading from '@/app/loading'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AdminAuthProvider } from '@/contexts/AdminAuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useRef, useState } from 'react'
import RouteProgress from '@/components/layout/RouteProgress'

const queryClient = new QueryClient()

export function RootLayoutClient ({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')
  const [showIntro, setShowIntro] = useState(false)
  const hasShownIntroRef = useRef(false)

  // Intro sirf pehli baar (first load) par – navigation par dobara nahi
  useEffect(() => {
    if (isAdminRoute) {
      setShowIntro(false)
      return
    }
    if (hasShownIntroRef.current) return
    hasShownIntroRef.current = true
    setShowIntro(true)
    const timer = window.setTimeout(() => setShowIntro(false), 4500)
    return () => window.clearTimeout(timer)
  }, [isAdminRoute])

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
                <RouteProgress />
                <Header />
                <main>{children}</main>
                <CTASection />
                <Footer />
              </div>
              )}
        </AdminAuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
