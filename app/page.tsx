"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollFadeIn, ScrollSlideIn, ScrollScale } from "@/components/scroll-animations"
import { ContactForm } from "@/components/contact-form"
import {
  Camera,
  PenTool,
  Film,
  BookOpen,
  Share2,
  Monitor,
  Video,
  Star,
  Phone,
  Instagram,
  MessageCircle,
  Quote,
  Mail,
  MapPin,
  Clock,
  Award,
  Users,
  Heart,
  Shield,
  Facebook,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Galeria from "@/components/galeria"
import Footer from "@/components/footer"

export default function RevistaNpulse() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="parallax relative w-full h-[800px]">
            <Image
              src="/bg-revista.png?height=1080&width=1920&query=elegant cinematic background with golden light rays and sophisticated atmosphere"
              alt="Hero Background"
              fill
              className="object-cover brightness-[0.6] blur-sm"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full floating-animation opacity-60"></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-yellow-300 rounded-full floating-animation opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-20 w-1 h-1 bg-yellow-500 rounded-full floating-animation opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full floating-animation opacity-30"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
          <ScrollFadeIn delay={200}>
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <div className="relative inline-block">
                <Image
                  src="/logo-inpulse-branca.svg?height=80&width=200&query=elegant INpulse magazine logo in gold"
                  alt="INpulse Logo"
                  width={200}
                  height={80}
                  className="mx-auto mb-4 sm:mb-6 lg:mb-8 w-32 xs:w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-auto"
                />
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 floating-animation" />
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={400}>
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent gradient-shift bg-[length:200%_200%]">
                Revista INpulse
              </span>
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={600}>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 lg:mb-6 font-light px-2">
              Registrar Legados, Não Vender Imagem
            </h2>
          </ScrollFadeIn>

          <ScrollFadeIn delay={800}>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed px-4">
              Uma obra para inspirar gerações, com lançamento cinematográfico
            </p>
          </ScrollFadeIn>

          <ScrollScale delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                size="lg"
                className="w-full xs:w-auto sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group pulse-glow"
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Crown className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Quero Participar
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full xs:w-auto sm:w-auto border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full backdrop-blur-sm bg-white/10 group"
                onClick={() => document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Ver Última Edição
              </Button>
            </div>
          </ScrollScale>
        </div>
      </section>

      {/* Sobre a Revista */}
      <section
        id="sobre"
        className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-gray-300 to-gray-200 relative overflow-hidden z-10 shadow-lg"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-yellow-300 rounded-full floating-animation"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-400 rounded-full floating-animation"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollFadeIn>
              <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold floating-animation">
                <Zap className="w-4 h-4 mr-2" />
                NOSSA MISSÃO
              </Badge>
            </ScrollFadeIn>

            <ScrollFadeIn delay={200}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
                INpulse não é de propaganda.{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  Vai além do que você tem
                </span>{" "}
                e valoriza quem você é.
              </h2>
            </ScrollFadeIn>

            <ScrollScale delay={400}>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 border border-yellow-200 transform hover:scale-105 transition-all duration-300">
                <Quote className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-yellow-600 mx-auto mb-4 sm:mb-6 floating-animation" />
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                  "Dono do Tudo – idealizado no coração de Deus"
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  Nosso propósito transcende o material e abraça o espiritual
                </p>
              </div>
            </ScrollScale>

            <ScrollFadeIn delay={600}>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  Imortalize sua trajetória.
                </span>{" "}
                Inspire legados eternos.
              </h3>
            </ScrollFadeIn>

            <ScrollFadeIn delay={800}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
                Cada história contada na INpulse é um testemunho de fé, determinação e propósito. Registramos não apenas
                conquistas, mas a essência de quem você realmente é.
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
      {/* Benefícios */}
      <section id="beneficios" className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gray-300 relative z-9 shadow-lg">
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
                <Star className="w-4 h-4 mr-2" />
                BENEFÍCIOS EXCLUSIVOS
              </Badge>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                O que você recebe ao{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  participar
                </span>
              </h2>
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Camera,
                title: "Fotografia Profissional",
                description: "Sessão completa com fotógrafo especializado para capturar sua essência",
              },
              {
                icon: PenTool,
                title: "Consultoria de Escrita",
                description: "Apoio editorial para contar sua história de forma impactante e autêntica",
              },
              {
                icon: Film,
                title: "Evento Cinematográfico",
                description: "Presença VIP no lançamento exclusivo em ambiente cinematográfico",
              },
              {
                icon: BookOpen,
                title: "Revista Física e Digital",
                description: "Exemplares impressos de alta qualidade e versão digital permanente",
              },
              {
                icon: Share2,
                title: "Destaque nas Redes",
                description: "Promoção estratégica em nossas plataformas digitais",
              },
              {
                icon: Monitor,
                title: "Telão do Cinema",
                description: "Sua imagem projetada durante o evento de lançamento",
              },
              {
                icon: Video,
                title: "Eternizando",
                description: "Seu legado eternizado com a revista.",
              },
              {
                icon: BookOpen,
                title: "Sua História",
                description :"Deixe o seu legado com sua história.",
              },
            ].map((benefit, index) => (
              <ScrollScale key={index} delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-yellow-50 hover:to-yellow-100 transform hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg pulse-glow">
                      <benefit.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollScale>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section
        id="planos"
        className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-gray-200 to-gray-300"
      >
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
                <Crown className="w-4 h-4 mr-2" />
                PLANOS DE PARTICIPAÇÃO
              </Badge>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Escolha seu{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  espaço de destaque
                </span>
              </h2>
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto">
            {[
              {
                name: "Capa",
                price: "R$ 6.720",
                features: ["Destaque máximo", "Foto de capa", "Matéria especial", "Todos os benefícios"],
                popular: true,
              },
              {
                name: "Contracapa",
                price: "R$ 4.644",
                features: ["Posição privilegiada", "Visibilidade garantida", "Matéria completa", "Benefícios inclusos"],
              },
              {
                name: "Página Dupla",
                price: "R$ 3.470",
                features: ["Espaço generoso", "Layout especial", "História detalhada", "Benefícios inclusos"],
              },
              {
                name: "Página Completa",
                price: "R$ 1.560",
                features: ["Página exclusiva", "Design personalizado", "Sua história", "Benefícios inclusos"],
              },
            ].map((plan, index) => (
              <ScrollSlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 150}>
                <Card
                  className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                    plan.popular ? "ring-2 ring-yellow-400 scale-105 lg:scale-110 pulse-glow" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-center py-2 text-xs sm:text-sm font-semibold gradient-shift bg-[length:200%_200%]">
                      ⭐ MAIS POPULAR ⭐
                    </div>
                  )}
                  <CardContent className={`p-6 sm:p-8 ${plan.popular ? "pt-12 sm:pt-16" : ""}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{plan.name}</h3>
                    <div className="mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm sm:text-base text-gray-600">
                          <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      } font-semibold py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                      onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Reservar Minha Página
                    </Button>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </div>
      </section>
            {/* GALERIA COMENTADA
      <Galeria />*/}

      {/* Depoimentos */}
      <section
        id="depoimentos"
        className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-gray-200 to-gray-300"
      >
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollFadeIn>
              <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
                <Heart className="w-4 h-4 mr-2" />
                DEPOIMENTOS
              </Badge>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                O que dizem nossos{" "}
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                  participantes
                </span>
              </h2>
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Maria Silva",
                role: "Empresária",
                text: "A INpulse capturou a essência da minha jornada de fé e empreendedorismo de forma única. Uma experiência transformadora.",
                rating: 5,
              },
              {
                name: "João Santos",
                role: "Pastor",
                text: "Mais que uma revista, é um legado. Minha história agora inspira outras pessoas a perseguirem seus sonhos com propósito.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                role: "Advogada",
                text: "O profissionalismo e cuidado com cada detalhe me impressionaram. Recomendo para quem quer eternizar sua trajetória.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <ScrollSlideIn key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 200}>
                <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 mb-4 floating-animation" />
                    <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 pulse-glow">
                        <span className="text-white font-bold text-sm sm:text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl floating-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl floating-animation"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
          {/* Formulário de Contato */}
          <ContactForm />

          {/* Contatos Diretos */}
          <div className="mt-16 sm:mt-20">
            <ScrollFadeIn>
              <div className="text-center mb-8 sm:mb-12">
                <Badge className="mb-6 sm:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  CONTATO DIRETO
                </Badge>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Prefere falar{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                    diretamente?
                  </span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
                  Nossa equipe está pronta para atendê-lo pelos canais abaixo
                </p>
              </div>
            </ScrollFadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <ScrollSlideIn direction="left" delay={600}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <Phone className="w-10 sm:w-12 h-10 sm:h-12 text-yellow-400 mx-auto mb-4 floating-animation" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700">WhatsApp</h3>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">(62) 99102-3709</p>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">(62) 99185-6701</p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto transform hover:scale-105 transition-all duration-300">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chamar no WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </ScrollSlideIn>

              <ScrollSlideIn direction="right" delay={800}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <Instagram className="w-10 sm:w-12 h-10 sm:h-12 text-yellow-400 mx-auto mb-4 floating-animation" />
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700">Instagram</h3>
                    <p className="text-gray-300 mb-1 text-sm sm:text-base">@lucenaclaudiaa</p>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">@grupoinpulse</p>
                    <Button
                      variant="outline"
                      className="border-yellow-400 bg-white/10 text-yellow-400 hover:bg-yellow-400 hover:text-black w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
                    >
                      Seguir no Instagram
                    </Button>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            </div>

            <ScrollScale delay={1000}>
              <div className="text-center mt-12 sm:mt-16">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Lucena Claudia</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  Idealizadora e Diretora da Revista INpulse
                </p>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl pulse-glow"
                  onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Quero Participar Agora
                </Button>
              </div>
            </ScrollScale>
          </div>
        </div>
      </section>
    </div>
  )
}
