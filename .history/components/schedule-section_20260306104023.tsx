"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

type SessionType = "All" | "Keynote" | "Workshop" | "Panel" | "Networking"

const schedule = [
  {
    time: "09:00 – 09:30",
    title: "Registration & Check-in",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Registration and check-in.",
  },
  {
    time: "09:30 – 09:35",
    title: "Opening Ceremony",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Opening remarks and welcome.",
  },
  {
    time: "09:35 – 09:45",
    title: "Welcome Address",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Welcome address by organizers.",
  },
  {
    time: "09:45 – 09:55",
    title: "Lamp Lighting Ceremony",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Traditional lamp lighting ceremony.",
  },
  {
    time: "09:55 – 10:00",
    title: "Event Introduction & Agenda Overview",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Overview of the day's agenda.",
  },
  {
    time: "10:00 – 11:00",
    title: "Shefali Arora — Generative AI (GenAI)",
    speaker: "Shefali Arora",
    type: "Keynote" as SessionType,
    track: "GenAI",
    description: "Generative AI (GenAI) session by Shefali Arora.",
  },
  {
    time: "11:00 – 11:15",
    title: "Tea Break ☕",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Tea break.",
  },
  {
    time: "11:15 – 12:15",
    title: "Sonal Sarda — Cloud Security",
    speaker: "Sonal Sarda",
    type: "Keynote" as SessionType,
    track: "Cloud Security",
    description: "Cloud Security session by Sonal Sarda.",
  },
  {
    time: "12:30 – 13:30",
    title: "Lunch Break 🍽",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Lunch break.",
  },
  {
    time: "13:30 – 14:30",
    title: "Speaker 3 — Serverless",
    speaker: "Speaker 3",
    type: "Keynote" as SessionType,
    track: "Serverless",
    description: "Serverless session.",
  },
  {
    time: "14:30 – 14:45",
    title: "Tea Break ☕",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Tea break.",
  },
  {
    time: "14:45 – 15:45",
    title: "Speaker 4 — Track 4",
    speaker: "Speaker 4",
    type: "Keynote" as SessionType,
    track: "Track 4",
    description: "Session for Track 4.",
  },
  {
    time: "15:45 – 16:15",
    title: "Community Announcements / Closing Note",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Announcements and closing note.",
  },
  {
    time: "16:15 – 16:30",
    title: "Group Photo & Event Wrap-Up",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Group photo and wrap-up.",
  },
  {
    time: "16:30 – 17:00",
    title: "Swag Kit Distribution & Networking",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Swag distribution and networking.",
  },
]

const filters: SessionType[] = ["All", "Keynote", "Workshop", "Panel", "Networking"]

const typeColors: Record<SessionType, string> = {
  All: "hsl(265 80% 65%)",
  Keynote: "hsl(265 80% 65%)",
  Workshop: "hsl(210 70% 60%)",
  Panel: "hsl(160 60% 50%)",
  Networking: "hsl(40 80% 60%)",
}

export function ScheduleSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [activeFilter, setActiveFilter] = useState<SessionType>("All")

  const filteredSchedule =
    activeFilter === "All"
      ? schedule
      : schedule.filter((s) => s.type === activeFilter)

  return (
    <section id="schedule" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Event Schedule
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            The Day at a Glance
          </h2>
        </div>

        {/* Filters */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-[70px] top-0 bottom-0 hidden w-px bg-border/50 sm:block" aria-hidden="true" />

          <div className="space-y-4">
            {filteredSchedule.map((item, i) => (
              <div
                key={`${item.time}-${item.title}`}
                className={`group flex gap-4 sm:gap-8 transition-all duration-500 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80 + 300}ms` }}
              >
                {/* Time */}
                <div className="flex-shrink-0 pt-4 sm:w-[60px]">
                  <span className="font-display text-sm font-bold text-muted-foreground">
                    {item.time}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative hidden flex-shrink-0 sm:flex">
                  <div
                    className="mt-5 h-3 w-3 rounded-full border-2 transition-all group-hover:scale-125"
                    style={{
                      borderColor: typeColors[item.type],
                      backgroundColor: `${typeColors[item.type]}30`,
                    }}
                  />
                </div>

                {/* Card */}
                <div className="glass flex-1 rounded-xl p-4 transition-all duration-300 hover:glow-sm group-hover:border-primary/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: `${typeColors[item.type]}15`,
                        color: typeColors[item.type],
                      }}
                    >
                      {item.type}
                    </span>
                    {item.track !== "General" && (
                      <span className="text-xs text-muted-foreground">
                        {item.track}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.speaker && (
                    <p className="mt-1 text-sm text-primary">{item.speaker}</p>
                  )}
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
