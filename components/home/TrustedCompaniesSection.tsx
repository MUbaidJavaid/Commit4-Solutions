'use client'

export default function TrustedCompaniesSection () {
  const logos = [
    {
      name: 'Google',
      src: '/logos/google-logo.webp'
    },
    {
      name: 'Amazon',
      src: '/logos/amazon-logo.webp'
    },
    {
      name: 'Microsoft',
      src: '/logos/microsoft-log.png'
    },
    {
      name: 'eBay',
      src: '/logos/ebay-logo.webp'
    },
    {
      name: 'Shopify',
      src: '/logos/Shopify_Logo.png'
    },
    {
      name: 'Netflix',
      src: '/logos/netflix-logo.png'
    },
    {
      name: 'Client 1',
      src: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_8_90b80d2ede.png'
    },
    {
      name: 'Client 2',
      src: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_1_391c160bf3.png'
    },
    {
      name: 'Client 3',
      src: 'https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_1_3ed3284561.png'
    }
  ]

  return (
    <section className='bg-white py-10 sm:py-12'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <p className='mb-8 text-center text-xs sm:text-sm font-body tracking-wide text-slate-600 uppercase'>
          <span className='font-semibold text-sky-600'>1200+ Products</span>{' '}
          Successfully Developed For{' '}
          <span className='font-semibold text-sky-600'>300+ Customers</span>{' '}
          Across{' '}
          <span className='font-semibold text-sky-600'>120+ Countries</span>.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-6'>
          {logos.map(logo => (
            <div
              key={logo.name}
              className='flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity'
            >
              <img
                src={logo.src}
                alt={logo.name}
                className='h-8 w-auto object-contain'
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
