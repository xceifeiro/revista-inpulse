"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const element = ref.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return ref
}

export function ScrollFadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ScrollSlideIn({
  children,
  direction = "left",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  className?: string
  delay?: number
}) {
  const ref = useScrollAnimation()

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "-translate-x-8"
      case "right":
        return "translate-x-8"
      case "up":
        return "-translate-y-8"
      case "down":
        return "translate-y-8"
      default:
        return "-translate-x-8"
    }
  }

  return (
    <div
      ref={ref}
      className={`opacity-0 ${getTransform()} transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ScrollScale({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`opacity-0 scale-95 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
