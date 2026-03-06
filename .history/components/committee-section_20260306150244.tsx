"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Linkedin } from "lucide-react"

const committeeLevels = [
  {
    category: "University Leadership",
    members: [
      {
        name: "Dr. Aseem Chauhan",
        role: "Chancellor",
        linkedin: "https://linkedin.com",
        image: "/aseem.png",
      },
      {
        name: "Dr. D Subhakar",
        role: "Vice Chancellor",
        linkedin: "https://linkedin.com",
        image: "/subhakar.png",
      },
      {
        name: "Dr. PS Sali",
        role: "RBEF Vice President",
        linkedin: "https://linkedin.com",
        image: "/sali.png",
      },
      {
        name: "Dr. Monit Kapoor",
        role: "Pro Vice Chancellor & Director ASET",
        linkedin: "https://linkedin.com",
        image: "/monit.png",
      },
    ],
  },
  {
    category: "AWS Cloud Club Leadership",
    members: [
      {
        name: "Dr. Rajat Bhardwaj",
        role: "HOD - GenAI Dept & Faculty Lead AWS Cloud Club",
        linkedin: "https://linkedin.com",
        image: "/rajat_sir.png",
      },
      {
        name: "Shreya Sheriker",
        role: "Cloud Club Captain",
        linkedin: "https://linkedin.com",
        image: "/shreya.png",
      },
    ],
  },
  {
    category: "Organizing Team",
    members: Array.from({ length: 20 }, (_, i) => {
      // Provide specific entries for first 5 students, rest are generic
      if (i === 0) {
        return {
          name: "Abhijeet Sale",
          role: "Director of Tech",
          linkedin: "https://linkedin.com",
          image: "/abhijeet.png",
        }
      }
      if (i === 1) {
        return {
          name: "Chirantan",
          role: "Director of Outreach",
          linkedin: "https://linkedin.com",
          image: "/chirantan.png",
        }
      }
      if (i === 2) {
        return {
          name: "Tejas",
          role: "Director of Design",
          linkedin: "https://linkedin.com",
          image: "/tejas.png",
        }
      }
      if (i === 3) {
        return {
          name: "Agratha",
          role: "Director of Support",
          linkedin: "https://linkedin.com",
          image: "/agratha.png",
        }
      }
      if (i === 4) {
        return {
          name: "Saloni",
          role: "Director of Events",
          linkedin: "https://linkedin.com",
          image: "/saloni.png",
        }
      }
      if (i === 5) {
        return {
          name: "Kavya M",
          role: "Assistant Director of Tech",
          linkedin: "https://linkedin.com",
          image: "/kavya.png",
        }
      }
      if (i === 6) {
        return {
          name: "Thulasi S",
          role: "Assistant Director of Outreach",
          linkedin: "https://linkedin.com",
          image: "/thulasi.png",
        }
      }
      if (i === 7) {
        return {
          name: "Akash",
          role: "Assistant Director of Design",
          linkedin: "https://linkedin.com",
          image: "/akash.png",
        }
      }
      if (i === 8) {
        return {
          name: "Rachita",
          role: "Assistant Director of Support",
          linkedin: "https://linkedin.com",
          image: "/rachita.png",
        }
      }
      if (i === 9) {
        return {
          name: "Chaman",
          role: "Assistant Director of Events",
          linkedin: "https://linkedin.com",
          image: "/chaman.png",
        }
      }

      return {
        name: `Student ${i + 1}`,
        role: "Organizing Committee",
        linkedin: "https://linkedin.com",
      }
    }),
  },
]

function MemberCard({
  name,
  role,
  linkedin,
  image,
  isLeadership,
}: {
  name: string
  role: string
  linkedin: string
  image?: string
  isLeadership?: boolean
}) {
  return (
    <div
      className={`flex flex-col items-center text-center transition-all duration-300 hover:scale-105 ${
        isLeadership ? "p-4" : "p-3"
      }`}
    >
      <div
        className={`relative ${
          isLeadership
            ? "h-28 w-28 sm:h-36 sm:w-36"
              : "h-32 w-32 sm:h-40 sm:w-40"
        } overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 ring-2 ring-border/50 flex items-center justify-center transition-all hover:ring-primary/50`}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className={`font-bold text-primary ${
              isLeadership ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
      </div>
      <h3
        className={`mt-2 font-display font-semibold text-foreground ${
          isLeadership ? "text-sm sm:text-base" : "text-xs sm:text-sm"
        }`}
      >
        {name}
      </h3>
      <p
        className={`text-muted-foreground ${
          isLeadership ? "text-xs" : "text-xs"
        }`}
      >
        {role}
      </p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        title="LinkedIn Profile"
      >
        <Linkedin size={14} />
      </a>
    </div>
  )
}

export function CommitteeSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Team
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Event Organizing Committee
          </h2>
        </div>

        <div className="mt-16 space-y-12 sm:space-y-16">
          {committeeLevels.map((level, levelIdx) => (
            <div
              key={level.category}
              className={`transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${levelIdx * 150}ms` }}
            >
              <h3 className="text-center text-lg sm:text-xl font-display font-bold text-primary mb-8">
                {level.category}
              </h3>
                <div
                className={`grid gap-6 sm:gap-8 ${
                  level.category === "University Leadership"
                    ? "grid-cols-2 sm:grid-cols-4"
                    : level.category === "AWS Cloud Club Leadership"
                      ? "grid-cols-1 max-w-sm mx-auto"
                      : "grid-cols-2 sm:grid-cols-4 lg:grid-cols-5"
                }`}
              >
                {level.members.map((member, i) => (
                  <div
                    key={member.name}
                    className={`transition-all duration-500 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${levelIdx * 150 + i * 50}ms`,
                    }}
                  >
                    <MemberCard
                      {...member}
                      isLeadership={
                        level.category !== "Organizing Team"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
