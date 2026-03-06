"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Sparkles, Zap, Shield } from "lucide-react"
import { useRef } from "react"

const tracks = [
  {
    icon: Sparkles,
    title: "GenAI",
    highlights: [
      "Building with LLMs & foundation models",
      "Prompt engineering & evaluation",
      "Responsible AI practices",
    ],
    color: "hsl(278 72% 65%)",
  },
  {
    icon: Zap,
    title: "Serverless",
    highlights: [
      "Lambda & serverless design patterns",
      "Event-driven architectures",
      "Scaling, observability & cost optimization",
    ],
    color: "hsl(287 74% 72%)",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    highlights: [
      "Identity & access management",
      "Secure architecture best practices",
      "Threat detection & incident response",
    ],
    color: "hsl(210 70% 50%)",
  },
]

export function TracksSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="tracks" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Technical Tracks
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Choose Your Path
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tracks will be revealed soon — stay tuned for details.
          </p>
        </div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="mt-16 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className={`group glass min-w-[280px] flex-shrink-0 snap-center rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] lg:min-w-0 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${i * 100 + 200}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: `${track.color}15`,
                    color: track.color,
                  }}
                >
                  <track.icon size={24} />
                </div>

                {/* Intentionally hide details; show suspense overlay */}
                <div className="h-28">
                  <div className="h-full w-full bg-transparent" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl bg-background/60 backdrop-blur-sm px-4 py-2 text-center">
                    <p className="font-semibold text-foreground">Tracks will be revealed soon</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
