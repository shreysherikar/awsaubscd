"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    sponsors: [{ name: "Amazon Web Services", short: "AWS" }],
    size: "large",
  },
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "Google Cloud", short: "GC" },
      { name: "Microsoft Azure", short: "MA" },
    ],
    size: "medium",
  },
  {
    tier: "Silver Sponsors",
    sponsors: [
      { name: "DigitalOcean", short: "DO" },
      { name: "MongoDB", short: "MDB" },
      { name: "Postman", short: "PM" },
    ],
    size: "small",
  },
  {
    tier: "Community Partners",
    sponsors: [
      { name: "Dev Community", short: "DC" },
      { name: "Hashnode", short: "HN" },
      { name: "MLH", short: "MLH" },
      { name: "AWS UG", short: "AUG" },
    ],
    size: "small",
  },
]

export function SponsorsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Partners
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Our Sponsors
          </h2>
        </div>

        <div className="mt-12 space-y-12">
          {sponsorTiers.map((tier, ti) => (
            <div
              key={tier.tier}
              className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${ti * 150 + 200}ms` }}
            >
              <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {tier.tier}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {tier.sponsors.map((sponsor) => {
                  const sizeClasses =
                    tier.size === "large"
                      ? "h-24 w-48 text-2xl"
                      : tier.size === "medium"
                      ? "h-20 w-40 text-xl"
                      : "h-16 w-32 text-base"

                  return (
                    <div
                      key={sponsor.name}
                      className={`glass group flex items-center justify-center rounded-2xl transition-all duration-300 hover:glow-sm hover:border-primary/30 ${sizeClasses}`}
                    >
                      <span className="font-display font-bold text-muted-foreground transition-colors group-hover:text-foreground">
                        {sponsor.short}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
