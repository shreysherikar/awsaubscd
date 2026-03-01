'use client'

export function LogosSection() {
  const logos = [
    {
      name: 'AWS Student Community Day',
      src: '/aws-scd-logo.png',
      bgColor: 'bg-white',
    },
    {
      name: 'AWS Cloud Club',
      src: '/cloud-club-logo.png',
      bgColor: 'bg-white',
    },
    {
      name: 'Amity University Bengaluru',
      src: '/aub_blue.png',
      bgColor: 'bg-[#F2F4F7]',
    },
  ]

  return (
    <section className="relative py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-start justify-start gap-12 sm:gap-16 lg:gap-20">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center gap-3 flex-1">
              <div
                className={`h-16 w-16 sm:h-20 sm:w-20 rounded-lg ${logo.bgColor} flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden p-2 border border-gray-200`}
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