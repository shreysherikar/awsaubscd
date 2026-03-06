"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Linkedin, X as XIcon } from "lucide-react"
import { useState } from "react"

const speakers = Array.from({ length: 4 }).map(() => ({
  name: "Coming Soon",
  role: "",
  company: "",
  session: "Coming Soon",
  bio: "Details coming soon.",
  image: "/speaker_place.png",
  ))

function SpeakerModal({ speaker, onClose }: { speaker: (typeof speakers)[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="glass-strong relative z-10 w-full max-w-md rounded-2xl p-6 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="speaker-name"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Close dialog"
        >
          <XIcon size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="h-28 w-28 overflow-hidden rounded-full bg-secondary">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "/sali.png"
              }}
            />
          </div>

          <h3 id="speaker-name" className="mt-4 font-display text-xl font-bold text-foreground">
            {speaker.name}
          </h3>
          {speaker.role && <p className="text-sm text-primary">{speaker.role}</p>}
          {speaker.company && <p className="text-sm text-muted-foreground">{speaker.company}</p>}

          <div className="mt-4 rounded-xl bg-secondary/50 p-4 w-full">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Session</p>
            <p className="mt-1 font-display text-sm font-semibold text-foreground">{speaker.session}</p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>

          
        </div>
      </div>
    </div>
  )
}

export function SpeakersSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div ref={ref} className={`mx-auto max-w-7xl px-6 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Keynote Speakers</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">Learn from the Best</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Industry leaders and AWS experts sharing cutting-edge insights.</p>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {speakers.map((speaker, i) => (
            <button
              key={`speaker-${i}`}
              onClick={() => setSelectedSpeaker(speaker)}
              aria-label={`Open speaker profile: ${speaker.name} — ${speaker.session}`}
              className={`glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:glow-sm`}
              style={{ animationDelay: `${i * 80 + 120}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-secondary transition-all group-hover:ring-2 group-hover:ring-primary/50">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = "/sali.png"
                    }}
                  />
                </div>

                <h3 className="mt-4 font-display font-semibold text-foreground">{speaker.name}</h3>
                {speaker.role && <p className="text-sm text-primary mt-1">{speaker.role}</p>}
                {speaker.company && <p className="text-xs text-muted-foreground">{speaker.company}</p>}

                <div className="mt-4 rounded-lg bg-secondary/50 px-3 py-2 w-full max-w-[12rem]">
                  <p className="text-sm font-medium text-foreground">{speaker.session}</p>
                </div>

                <div className="mt-3 flex items-center gap-2 justify-center">
                  <Linkedin size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">View Profile</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedSpeaker && <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />}
    </section>
  )
}
