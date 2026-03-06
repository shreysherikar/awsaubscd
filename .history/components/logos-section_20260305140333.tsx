'use client'

export function LogosSection() {
  const logos = [
    {
      name: 'Amity Innovation Incubator',
      src: '/aii.png',
      bgColor: 'bg-white',
    },
    {
      name: 'AWS Cloud Club',
      src: '/cloudClub.png',
      bgColor: 'bg-white',
    },
    {
      name: 'Amity University Bengaluru',
      src: '/aub_blue.png',
      bgColor: 'bg-white',
    },
  ]

  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-center gap-16 sm:gap-20 lg:gap-24">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center gap-4 flex-1">
              <div
                className={`h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40 rounded-xl ${logo.bgColor} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 flex-shrink-0 overflow-hidden p-4 border-2 border-primary/20 hover:border-primary/50 hover:scale-105`}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/80?text=Error"
                    console.log("Failed to load:", logo.src)
                  }}
                />
              </div>
              <span className="text-base sm:text-lg font-semibold text-foreground text-center leading-snug">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}