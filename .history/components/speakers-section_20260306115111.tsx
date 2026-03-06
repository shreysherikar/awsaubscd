"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Linkedin, X as XIcon } from "lucide-react"
import { useState } from "react"

const speakers = [
  {
    name: "",
    role: "Cloud Security | AWS Authorized Instructor",
    company: "",
    session: "Sonal Sarda",
    bio: "Experienced cloud security practitioner and AWS Authorized Instructor focusing on secure cloud architecture and IAM best practices.",
    image: "/sonal.png",
    linkedin: "https://www.linkedin.com/in/sonal-sarda-584b549?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Shefali Arora",
    role: "AWS Community Builder | AWS Lead Instructor",
    company: "",
    session: "Shefali Arora",
    bio: "Community builder and instructor working across GenAI, ML and data science training programs.",
    image: "/shefali.png",
    linkedin: "https://www.linkedin.com/in/shefali-arora-9a6a2a10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Coming Soon",
    role: "",
    company: "",
    session: "Coming Soon",
    bio: "Details coming soon.",
    image: "/speakers/placeholder.jpg",
    linkedin: "#",
  },
  {
    name: "Coming Soon",
    role: "",
    company: "",
    session: "Coming Soon",
    bio: "Details coming soon.",
    image: "/speakers/placeholder.jpg",
    linkedin: "#",
  },
]

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: (typeof speakers)[0]
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="glass-strong relative z-10 w-full max-w-md rounded-2xl p-8 animate-scale-in"
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
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-secondary">
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
              {speaker.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>
          <div>
            <h3 id="speaker-name" className="font-display text-xl font-bold text-foreground">
              const speakers = [
                {
                  name: "Coming Soon",
                  role: "",
                  company: "",
                  session: "Coming Soon",
                  bio: "Details coming soon.",
                  image: "/aii.png",
                  linkedin: "#",
                },
                {
                  name: "Coming Soon",
                  role: "",
                  company: "",
                  session: "Coming Soon",
                  bio: "Details coming soon.",
                  image: "/aii.png",
                  linkedin: "#",
                },
                {
                  name: "Coming Soon",
                  role: "",
                  company: "",
                  session: "Coming Soon",
                  bio: "Details coming soon.",
                  image: "/aii.png",
                  linkedin: "#",
                },
                {
                  name: "Coming Soon",
                  role: "",
                  company: "",
                  session: "Coming Soon",
                  bio: "Details coming soon.",
                  image: "/aii.png",
                  linkedin: "#",
                },
                {
                  name: "Coming Soon",
                  role: "",
                  company: "",
                  session: "Coming Soon",
                  bio: "Details coming soon.",
                  image: "/aii.png",
                  linkedin: "#",
                },
                {
                  name: "Coming Soon",
                  role: "",
                  company: "",
                  session: "Coming Soon",
                  bio: "Details coming soon.",
                  image: "/aii.png",
                  linkedin: "#",
                },
              ]
            Learn from the Best
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Industry leaders and AWS experts sharing cutting-edge insights.
          </p>
        </div>

        {/* Speaker grid */}
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {speakers.map((speaker, i) => (
            <button
              key={speaker.name === "Coming Soon" ? `coming-soon-${i}` : speaker.name}
              onClick={() => setSelectedSpeaker(speaker)}
              className={`glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:glow-sm ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full bg-secondary transition-all group-hover:ring-2 group-hover:ring-primary/50">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = "/aii.png"
                    }}
                  />
                </div>

                
                <p className="text-sm text-primary mt-1">{speaker.role}</p>
                {speaker.company && (
                  <p className="text-xs text-muted-foreground">{speaker.company}</p>
                )}
                
                <div className="mt-4 rounded-lg bg-secondary/50 px-3 py-2 w-full max-w-[12rem]">
                  <p className="text-sm font-medium text-foreground">{speaker.session}</p>
                </div>

                <div className="mt-3 flex items-center gap-2 justify-center">
                  <Linkedin size={14} className="text-muted-foreground" />
                  <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    View Profile
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <SpeakerModal speaker={selectedSpeaker} onClose={() => setSelectedSpeaker(null)} />
      )}
    </section>
  )
}
