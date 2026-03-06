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
        linkedin: "https://www.linkedin.com/in/aseemchauhan",
        image: "/aseem.png",
      },
      {
        name: "Dr. D Subhakar",
        role: "Vice Chancellor",
        linkedin: "https://www.linkedin.com/in/d-subhakar-2750411ba",
        image: "/subhakar.png",
      },
      {
        name: "Dr. PS Sali",
        role: "RBEF Vice President",
        linkedin: "https://www.linkedin.com/in/dr-sali-p-s-602628a",
        image: "/sali.png",
      },
      {
        name: "Dr. Monit Kapoor",
        role: "Pro Vice Chancellor & Director ASET",
        linkedin: "https://www.linkedin.com/in/monitkapoor01",
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
        linkedin: "https://www.linkedin.com/in/dr-rajat-bhardwaj-28109a214",
        image: "/rajat_sir.png",
      },
      {
        name: "Shreya Sheriker",
        role: "Cloud Club Captain",
        linkedin: "https://www.linkedin.com/in/shreya-sherikar",
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
          linkedin: "https://www.linkedin.com/in/chirantan-chandra-h",
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
          linkedin: "https://www.linkedin.com/in/saloni-kumari-82b03a2a9",
          image: "/saloni.png",
        }
      }
      if (i === 5) {
        return {
          name: "Kavya M",
          role: "Assistant Director of Tech",
          linkedin: "https://www.linkedin.com/in/kavya4kavya",
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
          linkedin: "https://www.linkedin.com/in/akash-gowda-r-h-38596b314",
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
          linkedin: "https://www.linkedin.com/in/chaman-gowda-p-b88872326",
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
      className={`group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
        isLeadership ? "p-4" : "p-3"
      }`}
    >
        members: [
          {
            name: "Abhijeet Sale",
            role: "Director of Tech",
            linkedin: "https://linkedin.com",
            image: "/abhijeet.png",
          },
          {
            name: "Chirantan Chandra H",
            role: "Director of Outreach",
            linkedin: "https://www.linkedin.com/in/chirantan-chandra-h",
            image: "/chirantan.png",
          },
          {
            name: "Tejas",
            role: "Director of Design",
            linkedin: "https://linkedin.com",
            image: "/tejas.png",
          },
          {
            name: "Agratha",
            role: "Director of Support",
            linkedin: "https://linkedin.com",
            image: "/agratha.png",
          },
          {
            name: "Saloni Kumari",
            role: "Director of Events",
            linkedin: "https://www.linkedin.com/in/saloni-kumari-82b03a2a9",
            image: "/saloni.png",
          },
          {
            name: "Kavya M",
            role: "Assistant Director of Tech",
            linkedin: "https://www.linkedin.com/in/kavya4kavya",
            image: "/kavya.png",
          },
          {
            name: "Thulasi S",
            role: "Assistant Director of Outreach",
            linkedin: "https://linkedin.com",
            image: "/thulasi.png",
          },
          {
            name: "Aakash Gowda R H",
            role: "Assistant Director of Design",
            linkedin: "https://www.linkedin.com/in/akash-gowda-r-h-38596b314",
            image: "/akash.png",
          },
          {
            name: "Rachita",
            role: "Assistant Director of Support",
            linkedin: "https://linkedin.com",
            image: "/rachita.png",
          },
          {
            name: "Chaman Gowda P",
            role: "Assistant Director of Events",
            linkedin: "https://www.linkedin.com/in/chaman-gowda-p-b88872326",
            image: "/chaman.png",
          },
          // Replaced generic placeholders with the provided member list
          {
            name: "Sahil Varshney",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/sahil-varshney-67a346251",
          },
          {
            name: "Syed Amaan Tabraiz",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/syed-amaan-tabraiz-a23745295",
          },
          {
            name: "Rajath Sai S",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/rajath-sai-s-3560a52b5",
          },
          {
            name: "Neelambika Bargonda",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/neelambika-bargonda-78542632a",
          },
          {
            name: "Mohammed Moin",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/mohammed-moin-0475873b2",
          },
          {
            name: "Monika Pandey",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/monika-pandey07",
          },
          {
            name: "Kavya",
            role: "Member",
            linkedin: "https://www.linkedin.com/in/kavya4kavya",
          },
        ],
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
