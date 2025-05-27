"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Crown, Phone, Instagram, ChevronDown, MessageCircle, FileText } from "lucide-react"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const router = useRouter()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Navbar aparece após 100px de scroll
      if (currentScrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // Se estiver na página principal, faz scroll suave
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    } else {
      // Se estiver em outra página, redireciona para a home com âncora
      router.push(`/#${sectionId}`)
      setIsMenuOpen(false)
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/5562991023709?text=Olá! Gostaria de saber mais sobre a Revista INpulse.", "_blank")
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Início", id: "hero" },
    { name: "Benefícios", id: "beneficios" },
    { name: "Planos", id: "planos" },
    { name: "Depoimentos", id: "depoimentos" },
    { name: "Contato", id: "contato" },
  ]

  const scrollToTop = () => {
    if (isHomePage) {
      const element = document.getElementById("hero")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push("/#hero")
    }
  }

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Main Navbar */}
        <div className="bg-black/60 backdrop-blur-md border-b border-yellow-400/20 shadow-xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 lg:h-20">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                >
                  <Image
                    src="/logo-inpulse-branca.svg"
                    alt="INpulse Logo"
                    width={120}
                    height={120}
                    className="h-7 lg:h-10 w-auto"
                  />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium relative group py-2"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-400 bg-black/40 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  onClick={openWhatsApp}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-yellow-400 text-yellow-400 bg-black/40 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  onClick={() => scrollToSection("contato")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Formulário
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => scrollToSection("planos")}
                >
                  <Crown className="w-4 h-4 mr-2" />
                  Participar
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMenuOpen(!isMenuOpen)
                  }}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                  aria-label="Menu"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Compacto */}
        {isMenuOpen && (
          <div
            className="lg:hidden bg-black/98 backdrop-blur-md border-b border-yellow-400/20 shadow-xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container bg-black/50 backdrop-blur-md mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {/* Navigation Links */}
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-yellow-400 hover:text-yellow-600 transition-colors duration-300 text-left py-2 border-b border-gray-800 last:border-b-0 text-sm font-medium"
                  >
                    {item.name}
                  </button>
                ))}

                {/* Mobile CTAs */}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black/40 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full justify-center py-2 text-sm"
                    onClick={openWhatsApp}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black/40  border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full justify-center py-2 text-sm"
                    onClick={() => scrollToSection("contato")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Formulário
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold transition-all duration-300 w-full justify-center py-2 text-sm"
                    onClick={() => scrollToSection("planos")}
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    Participar
                  </Button>
                </div>

                {/* Mobile Social Links */}
                <div className="flex justify-center space-x-6 pt-3 border-t border-gray-800">
                  <a
                    href="https://instagram.com/lucenaclaudiaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <button
                    onClick={openWhatsApp}
                    className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <Phone className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
                    aria-label="Formulário"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[9998] w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black rounded-full shadow-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
          scrollY > 500 ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-0"
        }`}
        aria-label="Voltar ao topo"
      >
        <ChevronDown className="w-6 h-6 mx-auto rotate-180" />
      </button>
    </>
  )
}
