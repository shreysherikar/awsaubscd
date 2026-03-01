'use client'

import Image from 'next/image'

export function LogosSection() {
  const logos = [
    {
      name: 'AWS Student Community Day',
      src: '/aws-scd-logo.png', // Put this in your public folder
      bgColor: 'bg-secondary',
    },
    {
      name: 'AWS Cloud Club',
      src: '/cloud-club-logo.png',
      bgColor: 'bg-accent',
    },
    {
      name: 'Amity University Bengaluru',
      src: '/aub_blue.png',
      bgColor: 'bg-primary',
    },
  ]

  return (
    <section className="relative py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-start gap-12 sm:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center gap-3 flex-1">
              <div
                className={`h-16 w-16 sm:h-20 sm:w-20 rounded-lg ${logo.bgColor} flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden p-2`}
              >
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-medium text-foreground text-center leading-snug">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}