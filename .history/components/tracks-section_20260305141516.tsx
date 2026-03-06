"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Cloud, GitBranch, Brain, Zap, Award } from "lucide-react"
import { useRef } from "react"

const tracks = [
  {
    icon: Cloud,
    title: "Cloud Foundations",
    highlights: [
      "AWS Core Services deep-dive",
      "VPC, IAM & Security best practices",
      "Architecting for the cloud",
    ],
    color: "hsl(24 100% 50%)",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    highlights: [
      "CodePipeline & CodeBuild workflows",
      "Infrastructure as Code with CDK",
      "Container orchestration with ECS",
    ],
    color: "hsl(24 90% 45%)",
  },
  {
    icon: Brain,
    title: "AI/ML on AWS",
    highlights: [
      "SageMaker model training",
      "Bedrock & generative AI",
      "Real-time ML inference pipelines",
    ],
    color: "hsl(215 22% 36%)",
  },
  {
    icon: Zap,
    title: "Serverless Architecture",
    highlights: [
      "Lambda, API Gateway & DynamoDB",
      "Event-driven design patterns",
      "Step Functions orchestration",
    ],
    color: "hsl(215 14% 52%)",
  },
  {
    icon: Award,
    title: "Career & Certifications",
    highlights: [
      "AWS certification roadmap",
      "Resume building for cloud roles",
      "Mock exam strategies & tips",
    ],
    color: "hsl(210 10% 62%)",
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
            Five curated tracks spanning the breadth of modern cloud engineering.
          </p>
        </div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="mt-16 flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
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
              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  boxShadow: `0 0 25px ${track.color}30, inset 0 0 25px ${track.color}10`,
                }}
                aria-hidden="true"
              />

              <div className="relative">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: `${track.color}15`,
                    color: track.color,
                  }}
                >
                  <track.icon size={24} />
                </div>

                <h3 className="font-display text-lg font-semibold text-foreground">
                  {track.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {track.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: track.color }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
