"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"

type SessionType = "All" | "Keynote" | "Workshop" | "Panel" | "Networking"

const schedule = [
  {
    time: "08:30",
    title: "Registration & Welcome Kit",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Pick up your badge, swag kit, and grab a coffee.",
  },
  {
    time: "09:30",
    title: "Opening Keynote: The Future of Cloud",
    speaker: "Priya Sharma",
    type: "Keynote" as SessionType,
    track: "General",
    description: "Setting the stage for a day of cloud innovation.",
  },
  {
    time: "10:30",
    title: "Building Serverless APIs with Lambda",
    speaker: "Vikram Reddy",
    type: "Workshop" as SessionType,
    track: "Serverless Architecture",
    description: "Hands-on workshop building production-ready serverless APIs.",
  },
  {
    time: "11:30",
    title: "ML Model Deployment on SageMaker",
    speaker: "Sarah Chen",
    type: "Workshop" as SessionType,
    track: "AI/ML on AWS",
    description: "Deploy and monitor ML models in production.",
  },
  {
    time: "12:30",
    title: "Lunch Break & Networking",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Enjoy a curated lunch and connect with fellow attendees.",
  },
  {
    time: "13:30",
    title: "Event-Driven Microservices at Scale",
    speaker: "Arjun Mehta",
    type: "Keynote" as SessionType,
    track: "DevOps & CI/CD",
    description: "Architecture patterns for building resilient distributed systems.",
  },
  {
    time: "14:30",
    title: "Cloud Security for Fintech",
    speaker: "Ananya Gupta",
    type: "Panel" as SessionType,
    track: "Cloud Foundations",
    description: "Panel discussion on security best practices.",
  },
  {
    time: "15:30",
    title: "From Student to Cloud Professional",
    speaker: "Rohan Das",
    type: "Keynote" as SessionType,
    track: "Career & Certifications",
    description: "A roadmap for launching your cloud career.",
  },
  {
    time: "16:30",
    title: "Cloud Quiz Challenge & Prizes",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Test your cloud knowledge and win prizes.",
  },
  {
    time: "17:00",
    title: "Closing Ceremony & Group Photo",
    speaker: "",
    type: "Networking" as SessionType,
    track: "General",
    description: "Wrapping up an incredible day of learning.",
  },
]

const filters: SessionType[] = ["All", "Keynote", "Workshop", "Panel", "Networking"]

const typeColors: Record<SessionType, string> = {
  All: "hsl(268 68% 55%)",
  Keynote: "hsl(272 70% 60%)",
  Workshop: "hsl(260 62% 58%)",
  Panel: "hsl(282 66% 64%)",
  Networking: "hsl(290 66% 70%)",
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
