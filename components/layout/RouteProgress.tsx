'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function RouteProgress () {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [width, setWidth] = useState(0)
  const timersRef = useRef<number[]>([])

  // Internal link click par turant progress dikhao
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="/"]')
      if (!anchor || (anchor as HTMLAnchorElement).target === '_blank') return
      const href = (anchor as HTMLAnchorElement).getAttribute('href')
      if (!href || href === '#') return
      if (href === pathname) return
      timersRef.current.forEach(t => clearTimeout(t))
      timersRef.current = []
      setVisible(true)
      setWidth(20)
      timersRef.current.push(window.setTimeout(() => setWidth(70), 100))
      timersRef.current.push(window.setTimeout(() => setWidth(90), 400))
    }
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
      timersRef.current.forEach(t => clearTimeout(t))
      timersRef.current = []
    }
  }, [pathname])

  // Pathname change = navigation complete, bar complete karo aur hide
  useEffect(() => {
    if (!visible) return
    setWidth(100)
    const t = window.setTimeout(() => {
      setVisible(false)
      setWidth(0)
    }, 120)
    return () => window.clearTimeout(t)
  }, [pathname, visible])

  if (!visible) return null

  return (
    <div
      className='fixed top-0 left-0 right-0 z-[100] h-1 bg-accent transition-all duration-150 ease-out'
      style={{ width: `${width}%` }}
      aria-hidden
    />
  )
}
