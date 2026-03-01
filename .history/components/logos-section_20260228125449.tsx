'use client'

export function LogosSection() {
  const logos = [
    {
      name: 'AWS Student Community Day',
      number: '1',
      bgColor: 'bg-secondary',
    },
    {
      name: 'AWS Cloud Club',
      number: '2',
      bgColor: 'bg-accent',
    },
    {
      name: 'Amity University Bengaluru',
      number: '3',
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
                className={`h-16 w-16 sm:h-20 sm:w-20 rounded-lg ${logo.bgColor} flex items-center justify-center shadow-sm flex-shrink-0`}
              >
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  {logo.number}
                </span>
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
