"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { Trophy, RotateCcw, ChevronRight } from "lucide-react"

const questions = [
  {
    question: "Which AWS service is used for serverless function execution?",
    options: ["EC2", "Lambda", "ECS", "Lightsail"],
    correct: 1,
  },
  {
    question: "What does S3 stand for?",
    options: [
      "Simple Storage Service",
      "Secure Server System",
      "Scalable Storage Solution",
      "Server Side Storage",
    ],
    correct: 0,
  },
  {
    question: "Which AWS service provides managed Kubernetes?",
    options: ["ECS", "Fargate", "EKS", "Beanstalk"],
    correct: 2,
  },
  {
    question: "What is the maximum execution time for a Lambda function?",
    options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
    correct: 2,
  },
  {
    question: "Which service is AWS's managed relational database?",
    options: ["DynamoDB", "ElastiCache", "RDS", "Redshift"],
    correct: 2,
  },
]

const badges = [
  { min: 0, label: "Beginner", color: "hsl(258 62% 58%)", icon: "🌱" },
  { min: 2, label: "Intermediate", color: "hsl(268 66% 56%)", icon: "📈" },
  { min: 4, label: "Advanced", color: "hsl(278 72% 63%)", icon: "⭐" },
  { min: 5, label: "Expert", color: "hsl(288 70% 68%)", icon: "👑" },
]

export function QuizSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [started, setStarted] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleSelect = (index: number) => {
    if (answered) return
    setSelected(index)
    setAnswered(true)
    if (index === questions[currentQ].correct) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const handleReset = () => {
    setCurrentQ(0)
    setScore(0)
    setSelected(null)
    setShowResult(false)
    setStarted(false)
    setAnswered(false)
  }

  const badge = badges.reduce((acc, b) => (score >= b.min ? b : acc), badges[0])

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-2xl px-6">
        {/* Section header */}
        <div className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Cloud Challenge
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Test Your AWS Knowledge
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Five quick questions. How well do you know the cloud?
          </p>
        </div>

        <div className={`mt-12 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          {!started ? (
            <div className="glass rounded-2xl p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Trophy size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                Ready to take the challenge?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                5 questions, instant scoring, earn your cloud badge.
              </p>
              <button
                onClick={() => setStarted(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(268_68%_55%/0.35)]"
              >
                Start Quiz
                <ChevronRight size={16} />
              </button>
            </div>
          ) : showResult ? (
            <div className="glass rounded-2xl p-8 text-center animate-scale-in">
              <div
                className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full text-5xl"
                style={{ backgroundColor: `${badge.color}15`, border: `2px solid ${badge.color}40` }}
              >
                {badge.icon}
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">
                {score}/{questions.length}
              </h3>
              <p className="mt-2 text-muted-foreground">correct answers</p>
              <div
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold"
                style={{
                  backgroundColor: `${badge.color}20`,
                  color: badge.color,
                  border: `1px solid ${badge.color}40`
                }}
              >
                <span className="text-lg">{badge.icon}</span>
                {badge.label}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                {badge.label === 'Beginner' && 'Great start on your AWS journey!'}
                {badge.label === 'Intermediate' && 'You have solid AWS knowledge!'}
                {badge.label === 'Advanced' && 'Impressive AWS expertise!'}
                {badge.label === 'Expert' && 'You are an AWS Cloud master!'}
              </p>
              <button
                onClick={handleReset}
                className="mt-6 flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw size={14} />
                Try Again
              </button>
            </div>
          ) : (
            <div className="glass rounded-2xl p-8">
              {/* Progress */}
              <div className="mb-6 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Question {currentQ + 1} of {questions.length}
                </span>
                <span className="text-primary font-medium">{score} pts</span>
              </div>
              <div className="mb-6 h-1 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{
                    width: `${((currentQ + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">
                {questions[currentQ].question}
              </h3>

              <div className="mt-6 space-y-3">
                {questions[currentQ].options.map((option, i) => {
                  let optionStyle = "bg-secondary/50 text-foreground hover:bg-secondary"
                  if (answered) {
                    if (i === questions[currentQ].correct) {
                      optionStyle = "bg-primary/15 text-primary border-primary/35"
                    } else if (i === selected && i !== questions[currentQ].correct) {
                      optionStyle = "bg-accent/15 text-accent border-accent/35"
                    } else {
                      optionStyle = "bg-secondary/30 text-muted-foreground"
                    }
                  }

                  return (
                    <button
                      key={option}
                      onClick={() => handleSelect(i)}
                      disabled={answered}
                      className={`w-full rounded-xl border border-border/50 px-4 py-3 text-left text-sm font-medium transition-all ${optionStyle}`}
                    >
                      <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/50 text-xs">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {option}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(268_68%_55%/0.35)]"
                  >
                    {currentQ < questions.length - 1 ? "Next" : "See Results"}
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
