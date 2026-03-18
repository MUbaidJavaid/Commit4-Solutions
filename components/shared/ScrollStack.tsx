'use client'

import Lenis from 'lenis'
import throttle from 'lodash.throttle'
import type { ReactNode } from 'react'
import React, { useCallback, useLayoutEffect, useRef } from 'react'

export interface ScrollStackItemProps {
  itemClassName?: string
  children: ReactNode
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = ''
}) => (
  <div
    className={`scroll-stack-card relative w-full my-8 rounded-3xl origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      contain: 'paint layout style'
    }}
  >
    {children}
  </div>
)

interface ScrollStackProps {
  className?: string
  children: ReactNode
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

export default function ScrollStack ({
  children,
  className = '',
  itemDistance = 60,
  itemScale = 0.018,
  itemStackDistance = 22,
  stackPosition = '18%',
  scaleEndPosition = '8%',
  baseScale = 0.9,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const stackCompletedRef = useRef(false)
  const lenisRef = useRef<Lenis | null>(null)
  const cardsRef = useRef<HTMLElement[]>([])
  const lastTransformsRef = useRef(
    new Map<
      number,
      { translateY: number; scale: number; rotation: number; blur: number }
    >()
  )

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0
      if (scrollTop > end) return 1
      return (scrollTop - start) / (end - start)
    },
    []
  )

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === 'string' && value.includes('%')) {
        return (parseFloat(value) / 100) * containerHeight
      }
      return parseFloat(value as string)
    },
    []
  )

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight
      }
    }
    const scroller = scrollerRef.current
    return {
      scrollTop: scroller ? scroller.scrollTop : 0,
      containerHeight: scroller ? scroller.clientHeight : 0
    }
  }, [useWindowScroll])

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect()
        return rect.top + window.scrollY
      }
      return element.offsetTop
    },
    [useWindowScroll]
  )

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return

    const { scrollTop, containerHeight } = getScrollData()
    const stackPositionPx = parsePercentage(stackPosition, containerHeight)
    const scaleEndPositionPx = parsePercentage(
      scaleEndPosition,
      containerHeight
    )

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end')

    const endElementTop = endElement
      ? getElementOffset(endElement as HTMLElement)
      : 0

    cardsRef.current.forEach((card, i) => {
      if (!card) return

      const cardTop = getElementOffset(card)
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i
      const triggerEnd = cardTop - scaleEndPositionPx
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i
      const pinEnd = endElementTop - containerHeight / 2

      const scaleProgress = calculateProgress(
        scrollTop,
        triggerStart,
        triggerEnd
      )
      const targetScale = baseScale + i * itemScale
      const scale = 1 - scaleProgress * (1 - targetScale)

      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0

      let blur = 0
      if (blurAmount > 0) {
        let topCardIndex = 0
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j])
          if (scrollTop >= jCardTop - stackPositionPx - itemStackDistance * j) {
            topCardIndex = j
          }
        }
        if (i < topCardIndex) {
          blur = Math.min((topCardIndex - i) * blurAmount, 1.5) // cap blur
        }
      }

      let translateY = 0
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * i
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i
      }

      const newTransform = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 10) / 10,
        blur: Math.round(blur * 10) / 10
      }

      const last = lastTransformsRef.current.get(i)
      const changed =
        !last ||
        Math.abs(last.translateY - newTransform.translateY) > 1.2 ||
        Math.abs(last.scale - newTransform.scale) > 0.004 ||
        Math.abs(last.rotation - newTransform.rotation) > 0.6 ||
        Math.abs(last.blur - newTransform.blur) > 0.3

      if (changed) {
        const t = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`
        const f = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : ''
        card.style.transform = t
        card.style.filter = f
        lastTransformsRef.current.set(i, newTransform)
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false
        }
      }
    })
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ])

  const throttledUpdate = useCallback(
    throttle(updateCardTransforms, 16, { leading: true, trailing: true }),
    [updateCardTransforms]
  )

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? []
    ) as HTMLElement[]

    cardsRef.current = cards

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`
      }
      card.style.willChange = 'transform, filter'
      card.style.transformOrigin = 'top center'
      card.style.backfaceVisibility = 'hidden'
      card.style.transform = 'translateZ(0)'
    })

    const lenis = new Lenis({
      duration: 1.6,
      easing: t => Math.min(1, 1.001 - Math.pow(4, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      lerp: 0.065
    })

    lenis.on('scroll', throttledUpdate)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    throttledUpdate() // initial

    return () => {
      lenis.destroy()
      throttledUpdate.cancel()
      lastTransformsRef.current.clear()
      stackCompletedRef.current = false
      cardsRef.current = []
    }
  }, [itemDistance, useWindowScroll, throttledUpdate])

  if (useWindowScroll) {
    return (
      <div className={className.trim() || undefined}>
        <div className='scroll-stack-inner pt-[15vh] px-4 sm:px-6 md:px-12 lg:px-20 pb-[40rem] min-h-screen'>
          {children}
          <div className='scroll-stack-end w-full h-px' aria-hidden />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div className='scroll-stack-inner pt-[20vh] px-6 sm:px-12 md:px-20 pb-[60vh] min-h-screen'>
        {children}
        <div className='scroll-stack-end w-full h-px' aria-hidden />
      </div>
    </div>
  )
}
