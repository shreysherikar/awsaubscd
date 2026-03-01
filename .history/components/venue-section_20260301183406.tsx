"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Clock, DoorOpen, Car } from "lucide-react"

const venueInfo = [
  {
    icon: Clock,
    title: "Registration Desk",
    detail: "Opens at 8:00 AM",
  },
  {
    icon: DoorOpen,
    title: "Entry Gate",
    detail: "Gate 2 - Main Auditorium Block",
  },
  {
    icon: Car,
    title: "Parking",
    detail: "Free visitor parking at Block C",
  },
]

export function VenueSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="venue" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Venue
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Amity University, Bengaluru
          </h2>
        </div>

        <div className={`mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          {/* Map */}
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.043594040994!2d77.43719057588826!3d12.892019716942475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f40f0980d2d%3A0x6b779a957b665313!2sAmity%20University%20Bengaluru!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amity University Bengaluru location"
              className="rounded-2xl"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {venueInfo.map((info, i) => (
              <div
                key={info.title}
                className={`glass flex-1 rounded-2xl p-6 transition-all duration-500 hover:glow-sm ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100 + 300}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <info.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {info.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
