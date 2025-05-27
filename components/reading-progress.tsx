"use client"

import { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(Math.min(100, Math.max(0, scrollPercent)))
    }

    // Atualizar imediatamente
    updateProgress()

    // Listener otimizado com throttle
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateProgress, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <>
      {/* Barra de Progresso Principal */}
      <div className="fixed top-0 left-0 right-0 z-[9997] h-1 bg-black/20">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-150 ease-out shadow-lg"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
          }}
        />
      </div>

      {/* Indicador Circular (Mobile) */}
      <div className="fixed top-4 right-4 z-[9996] lg:hidden">
        <div className="relative w-12 h-12">
          {/* Background Circle */}
          <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-black/20"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          {/* Progress Circle */}
          <svg className="absolute top-0 left-0 w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-yellow-500"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={`${progress}, 100`}
              strokeLinecap="round"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              style={{
                filter: "drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))",
                transition: "stroke-dasharray 0.15s ease-out",
              }}
            />
          </svg>

          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-600 bg-white/90 rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
              {Math.round(progress)}
            </span>
          </div>
        </div>
      </div>

      {/* Indicadores de Seção (Desktop) */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-[9996] hidden xl:block">
        <div className="flex flex-col space-y-4">
          {[
            { id: "hero", label: "Início", icon: "🏠" },
            { id: "sobre", label: "Sobre", icon: "📖" },
            { id: "beneficios", label: "Benefícios", icon: "⭐" },
            { id: "planos", label: "Planos", icon: "👑" },
            { id: "galeria", label: "Galeria", icon: "📸" },
            { id: "depoimentos", label: "Depoimentos", icon: "💬" },
            { id: "contato", label: "Contato", icon: "📞" },
          ].map((section, index) => (
            <SectionIndicator key={section.id} section={section} progress={progress} index={index} totalSections={7} />
          ))}
        </div>
      </div>
    </>
  )
}

function SectionIndicator({
  section,
  progress,
  index,
  totalSections,
}: {
  section: { id: string; label: string; icon: string }
  progress: number
  index: number
  totalSections: number
}) {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = document.getElementById(section.id)
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true)
            setIsVisible(true)
          } else {
            setIsActive(false)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    observer.observe(element)

    // Marcar como visível se já passou por ela
    const rect = element.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.5) {
      setIsVisible(true)
    }

    return () => observer.unobserve(element)
  }, [section.id])

  const sectionProgress = (index / (totalSections - 1)) * 100
  const isPassed = progress > sectionProgress

  const scrollToSection = () => {
    const element = document.getElementById(section.id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative group">
      {/* Tooltip */}
      <div
        className={`absolute left-12 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
        }`}
      >
        {section.label}
        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-black/90" />
      </div>

      {/* Indicator Button */}
      <button
        onClick={scrollToSection}
        className={`relative w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
          isActive
            ? "bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg scale-125"
            : isPassed || isVisible
              ? "bg-yellow-500/70 hover:bg-yellow-500"
              : "bg-gray-400/50 hover:bg-gray-400"
        }`}
        style={{
          boxShadow: isActive ? "0 0 15px rgba(255, 215, 0, 0.8)" : "none",
        }}
      >
        {/* Icon */}
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs transition-all duration-300 ${
            isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          {section.icon}
        </span>

        {/* Pulse Effect */}
        {isActive && <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-30" />}
      </button>

      {/* Connection Line */}
      {index < totalSections - 1 && (
        <div
          className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-8 transition-all duration-500 ${
            isPassed || isVisible ? "bg-yellow-500/50" : "bg-gray-400/30"
          }`}
        />
      )}
    </div>
  )
}

// Componente para estatísticas de leitura
export function ReadingStats() {
  const [stats, setStats] = useState({
    timeSpent: 0,
    wordsRead: 0,
    sectionsVisited: new Set<string>(),
  })

  useEffect(() => {
    const startTime = Date.now()
    let lastScrollTime = Date.now()

    const updateStats = () => {
      const now = Date.now()
      const timeSpent = Math.floor((now - startTime) / 1000)

      // Estimar palavras lidas baseado no scroll
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      const estimatedWords = Math.floor((scrollPercent / 100) * 1200) // Estimativa de 1200 palavras total

      // Detectar seções visitadas
      const sections = ["hero", "sobre", "beneficios", "planos", "galeria", "depoimentos", "contato"]
      const visitedSections = new Set(stats.sectionsVisited)

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            visitedSections.add(sectionId)
          }
        }
      })

      setStats({
        timeSpent,
        wordsRead: estimatedWords,
        sectionsVisited: visitedSections,
      })

      lastScrollTime = now
    }

    const handleScroll = () => {
      updateStats()
    }

    const interval = setInterval(updateStats, 1000)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [stats.sectionsVisited])

  // Mostrar stats apenas em desenvolvimento ou para admins
  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs space-y-1 backdrop-blur-sm">
      <div>
        ⏱️ {Math.floor(stats.timeSpent / 60)}m {stats.timeSpent % 60}s
      </div>
      <div>📖 ~{stats.wordsRead} palavras</div>
      <div>📍 {stats.sectionsVisited.size}/7 seções</div>
    </div>
  )
}
