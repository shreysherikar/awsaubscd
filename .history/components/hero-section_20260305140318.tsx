"use client"

import { useEffect, useState } from "react"
import { ArrowRight, CalendarDays, MapPin } from "lucide-react"

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass flex h-16 w-16 items-center justify-center rounded-xl text-2xl font-bold text-foreground sm:h-20 sm:w-20 sm:text-3xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date("2026-04-24T09:00:00+05:30")

    const update = () => {
      const now = new Date()
      const diff = eventDate.getTime() - now.getTime()

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >

      {/* Ambient glow effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, hsl(272 72% 62% / 0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[400px] w-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, hsl(286 70% 70% / 0.45) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Logos Section */}
        <div className="mb-8 flex items-center justify-center gap-8 sm:gap-16">
          {/* AWS Student Community Day */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden p-1.5 border border-primary/20">
              <img src="/aii.png" alt="Amity Innovation Incubator" className="h-full w-full object-contain" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground text-center max-w-[80px] leading-tight">Amity Innovation Incubator</span>
          </div>

          {/* AWS Cloud Club */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden p-1.5 border border-primary/20">
              <img src="/cloudClub.png" alt="AWS Cloud Club" className="h-full w-full object-contain" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground text-center max-w-[80px] leading-tight">AWS Cloud Club</span>
          </div>

          {/* Amity University Bengaluru */}
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-white flex items-center justify-center shadow-sm overflow-hidden p-1.5 border border-primary/20">
              <img src="/aub_blue.png" alt="Amity University Bengaluru" className="h-full w-full object-contain" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground text-center max-w-[80px] leading-tight">Amity University Bengaluru</span>
          </div>
        </div>

        {/* Event name */}
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <span className="block">AWS Student</span>
          <span className="gradient-text block">Community Day</span>
          <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl lg:text-4xl mt-2">
            2026
          </span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground sm:text-xl">
          Build. Deploy. Scale.
        </p>

        {/* Date & location */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-primary" />
            <span>April 24, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>Amity University, Bengaluru</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-10 flex items-center justify-center gap-3 sm:gap-4">
          <CountdownUnit value={timeLeft.days} label="Days" />
          <span className="mt-[-1.5rem] text-2xl font-light text-muted-foreground">
            :
          </span>
          <CountdownUnit value={timeLeft.hours} label="Hours" />
          <span className="mt-[-1.5rem] text-2xl font-light text-muted-foreground">
            :
          </span>
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <span className="mt-[-1.5rem] text-2xl font-light text-muted-foreground">
            :
          </span>
          <CountdownUnit value={timeLeft.seconds} label="Sec" />
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://docs.google.com/forms/d/1tHOJsmJiqKycMuYcwHIrzXSU1uvBTPT1GAb3qEKdDLY/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(268_68%_55%/0.35)]"
          >
            Register Now
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary/50"
          >
            View Schedule
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-border/50 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary/60" />
        </div>
      </div>
    </section>
  )
}
