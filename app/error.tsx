'use client'

import PremiumSkeleton from '@/components/shared/PremiumSkeleton'
import Link from 'next/link'
import { useEffect } from 'react'

export default function GlobalError ({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='min-h-[60vh] flex items-center justify-center bg-background'>
      <div className='w-full max-w-md px-6'>
        <PremiumSkeleton className='p-8 card-premium text-center'>
          <h1 className='text-2xl font-heading font-bold mb-2'>
            Something went wrong
          </h1>
          <p className='text-sm font-body text-muted-foreground mb-6'>
            An unexpected error occurred. You can try again or return to the
            homepage.
          </p>
          <div className='flex justify-center gap-3'>
            <button onClick={() => reset()} className='btn-primary text-sm'>
              Try again
            </button>
            <Link href='/' className='btn-outline text-sm'>
              Go home
            </Link>
          </div>
        </PremiumSkeleton>
      </div>
    </div>
  )
}
