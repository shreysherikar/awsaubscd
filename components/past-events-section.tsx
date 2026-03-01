"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const pastEvents = [
  {
    year: "2025",
    title: "AWS Student Community Day 2025",
    description: "Our inaugural event brought together 500+ students, industry leaders, and AWS experts to explore cloud technologies, participate in hands-on workshops, and network with the tech community. The event featured keynote sessions, technical talks, and live coding demonstrations.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  {
    year: "2024",
    title: "Cloud Innovation Summit 2024",
    description: "A successful pre-event gathering that laid the foundation for the AWS Student Community Day initiative. Featuring expert panels, cloud architecture workshops, and networking sessions that connected 300+ enthusiasts.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
  },
]

export function PastEventsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Memories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Past Events
          </h2>
        </div>

        <div className="mt-16 space-y-12">
          {pastEvents.map((event, index) => (
            <div
              key={event.year}
              className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                {/* Image */}
                <div className={`rounded-2xl overflow-hidden border border-border/50 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span className="inline-flex w-fit rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-semibold text-secondary mb-4">
                    {event.year}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl mb-4 text-balance">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
