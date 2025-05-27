"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ScrollFadeIn, ScrollSlideIn, ScrollScale } from "@/components/scroll-animations"
import {
  Phone,
  Instagram,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Shield,
  Facebook,
  Linkedin,
  Youtube,
  Send
} from "lucide-react"

export default function Footer() {
    return(
      <footer className="bg-black text-white">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollFadeIn>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Receba novidades da{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    INpulse
                  </span>
                </h3>
              </ScrollFadeIn>
              <ScrollFadeIn delay={200}>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                  Seja o primeiro a saber sobre novas edições, eventos e oportunidades exclusivas
                </p>
              </ScrollFadeIn>
              <ScrollScale delay={400}>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
                  />
                  <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    Inscrever
                  </Button>
                </div>
              </ScrollScale>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Logo e Descrição */}
            <ScrollSlideIn direction="left">
              <div className="lg:col-span-2">
                <Image
                  src="/logo-inpulse-branca.svg"
                  alt="INpulse Logo"
                  width={150}
                  height={60}
                  className="mb-4 sm:mb-6"
                />
                <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed max-w-md">
                  A Revista INpulse é mais que uma publicação - é um movimento que registra legados e inspira gerações
                  através de histórias autênticas de fé, propósito e transformação.
                </p>
              </div>
            </ScrollSlideIn>

            {/* Links Rápidos */}
            <ScrollFadeIn delay={200}>
              <div>
                <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-yellow-400">Links Rápidos</h4>
                <ul className="space-y-3">
                  {[
                    { name: "Sobre a Revista", id: "sobre" },
                    { name: "Como Participar", id: "beneficios" },
                    { name: "Planos e Preços", id: "planos" },
                    { name: "Depoimentos", id: "depoimentos" },
                    { name: "Contato", id: "contato" },
                  ].map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                        className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>

            {/* Informações de Contato */}
            <ScrollSlideIn direction="right" delay={400}>
              <div>
                <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-yellow-400">Contato</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm sm:text-base">(62) 99102-3709</p>
                      <p className="text-gray-500 text-xs sm:text-sm">WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm sm:text-base">contato@grupoinpulse.com.br</p>
                      <p className="text-gray-500 text-xs sm:text-sm">E-mail principal</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideIn>
          </div>

          {/* Certificações e Badges */}
          <ScrollFadeIn delay={600}>
            <div className="border-t border-gray-800 mt-12 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-gray-400 text-xs sm:text-sm">Site Seguro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-400 text-xs sm:text-sm">Qualidade Certificada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-400 text-xs sm:text-sm">+50 Hisórias</span>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <p className="text-gray-500 text-xs sm:text-sm">Desenvolvido com ❤️ para inspirar legados</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Copyright */}
          <ScrollFadeIn delay={800}>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                  © {new Date().getFullYear()} | Revista INpulse. Todos os direitos reservados. Desenvolvido por <Link href="https://autonextech.com.br" className="underline text-yellow-400 hover:text-yellow-400 transition-colors text-xs sm:text-sm">AutoNex</Link>
                </p>

                <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                  <Link href="/politica-privacidade" className="text-gray-500 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    Política de Privacidade
                  </Link>
                  <Link href="/termos-uso" className="text-gray-500 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    Termos de Uso
                  </Link>
                  <Link href="/politica-cookies" className="text-gray-500 hover:text-yellow-400 transition-colors text-xs sm:text-sm">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </footer>
      )}