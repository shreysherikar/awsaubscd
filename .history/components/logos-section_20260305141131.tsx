'use client'

export function LogosSection() {
  const logos = [
    {
      name: 'Amity Innovation Incubator',
      src: '/aii.png',
    },
    {
      name: 'AWS Cloud Club',
      src: '/cloudClub.png',
    },
    {
      name: 'Amity University Bengaluru',
      src: '/aub_blue.png',
    },
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-center gap-10 sm:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <div key={index} className="group flex flex-1 flex-col items-center gap-3">
              <div className="flex h-20 items-center justify-center sm:h-24 lg:h-28">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/80?text=Error"
                    console.log("Failed to load:", logo.src)
                  }}
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-foreground/90 text-center leading-snug">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}