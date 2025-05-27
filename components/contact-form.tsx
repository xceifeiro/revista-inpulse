"use client"

import React from "react"
import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ScrollFadeIn, ScrollScale } from "@/components/scroll-animations"
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Crown,
  MapPin,
  Calendar,
  Building,
  Wifi,
  WifiOff,
} from "lucide-react"

interface FormData {
  nome: string
  email: string
  telefone: string
  cidade: string
  profissao: string
  empresa: string
  plano: string
  mensagem: string
  newsletter: boolean
  termos: boolean
}

interface FormErrors {
  [key: string]: string
}

interface ApiResponse {
  success?: boolean
  error?: string
  message?: string
  data?: any
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    profissao: "",
    empresa: "",
    plano: "",
    mensagem: "",
    newsletter: false,
    termos: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [isOnline, setIsOnline] = useState(true)

  const planos = [
    { value: "capa", label: "Capa - R$ 6.720", popular: true },
    { value: "contracapa", label: "Contracapa - R$ 4.644" },
    { value: "pagina-dupla", label: "Página Dupla - R$ 3.470" },
    { value: "pagina-completa", label: "Página Completa - R$ 1.560" },
    { value: "informacoes", label: "Quero mais informações" },
  ]

  // Verificar conectividade
  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Nome
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório"
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = "Nome deve ter pelo menos 2 caracteres"
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    // Telefone
    const phoneRegex = /^[\d\s$$$$\-+]{10,}$/
    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório"
    } else if (!phoneRegex.test(formData.telefone.replace(/\D/g, ""))) {
      newErrors.telefone = "Telefone inválido"
    }

    // Cidade
    if (!formData.cidade.trim()) {
      newErrors.cidade = "Cidade é obrigatória"
    }

    // Plano
    if (!formData.plano) {
      newErrors.plano = "Selecione um plano de interesse"
    }

    // Mensagem
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória"
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres"
    }

    // Termos
    if (!formData.termos) {
      newErrors.termos = "Você deve aceitar os termos e condições"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }
    return value
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }

    // Formatação especial para telefone
    if (field === "telefone" && typeof value === "string") {
      setFormData((prev) => ({ ...prev, [field]: formatPhone(value) }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Verificar conectividade
    if (!isOnline) {
      setSubmitStatus("error")
      setSubmitMessage("Sem conexão com a internet. Verifique sua conexão e tente novamente.")
      return
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result: ApiResponse = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        setSubmitMessage(
          result.message || "Formulário enviado com sucesso! Verifique seu e-mail e aguarde nosso contato em breve.",
        )

        // Limpar formulário após sucesso
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          cidade: "",
          profissao: "",
          empresa: "",
          plano: "",
          mensagem: "",
          newsletter: false,
          termos: false,
        })

        // Scroll para o topo do formulário para mostrar a mensagem de sucesso
        setTimeout(() => {
          document.getElementById("contact-form")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 100)
      } else {
        throw new Error(result.error || "Erro desconhecido")
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)

      setSubmitStatus("error")

      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch")) {
          setSubmitMessage(
            "Erro de conexão. Verifique sua internet e tente novamente, ou entre em contato via WhatsApp.",
          )
        } else if (error.message.includes("timeout")) {
          setSubmitMessage("Tempo limite excedido. Tente novamente ou entre em contato via WhatsApp.")
        } else {
          setSubmitMessage(
            error.message || "Erro ao enviar formulário. Tente novamente ou entre em contato via WhatsApp.",
          )
        }
      } else {
        setSubmitMessage("Erro inesperado. Entre em contato via WhatsApp: (62) 99102-3709")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto" id="contact-form">
      <ScrollFadeIn>
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold">
            <Send className="w-4 h-4 mr-2" />
            FORMULÁRIO DE CONTATO
          </Badge>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Vamos conversar sobre seu{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">legado</span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
            Preencha o formulário abaixo e nossa equipe entrará em contato para personalizar sua participação
          </p>

          {/* Indicador de conectividade */}
          <div
            className={`inline-flex items-center mt-4 px-3 py-1 rounded-full text-xs ${
              isOnline
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {isOnline ? <Wifi className="w-3 h-3 mr-1" /> : <WifiOff className="w-3 h-3 mr-1" />}
            {isOnline ? "Online" : "Offline"}
          </div>
        </div>
      </ScrollFadeIn>

      <ScrollScale delay={200}>
        <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl sm:text-2xl text-white text-center">Solicitar Informações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="flex items-start space-x-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-300 text-sm font-medium mb-1">Sucesso!</p>
                  <p className="text-green-200 text-sm">{submitMessage}</p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-start space-x-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-300 text-sm font-medium mb-1">Erro no envio</p>
                  <p className="text-red-200 text-sm">{submitMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados Pessoais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 ${
                      errors.nome ? "border-red-500" : ""
                    }`}
                    placeholder="Seu nome completo"
                    disabled={isSubmitting}
                  />
                  {errors.nome && <p className="text-red-400 text-xs">{errors.nome}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="seu@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-white flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 ${
                      errors.telefone ? "border-red-500" : ""
                    }`}
                    placeholder="(62) 99999-9999"
                    disabled={isSubmitting}
                  />
                  {errors.telefone && <p className="text-red-400 text-xs">{errors.telefone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cidade" className="text-white flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Cidade *
                  </Label>
                  <Input
                    id="cidade"
                    type="text"
                    value={formData.cidade}
                    onChange={(e) => handleInputChange("cidade", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 ${
                      errors.cidade ? "border-red-500" : ""
                    }`}
                    placeholder="Sua cidade"
                    disabled={isSubmitting}
                  />
                  {errors.cidade && <p className="text-red-400 text-xs">{errors.cidade}</p>}
                </div>
              </div>

              {/* Dados Profissionais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="profissao" className="text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Profissão
                  </Label>
                  <Input
                    id="profissao"
                    type="text"
                    value={formData.profissao}
                    onChange={(e) => handleInputChange("profissao", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400"
                    placeholder="Sua profissão"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-white flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    Empresa/Organização
                  </Label>
                  <Input
                    id="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange("empresa", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400"
                    placeholder="Nome da empresa"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Plano de Interesse */}
              <div className="space-y-2">
                <Label htmlFor="plano" className="text-white flex items-center">
                  <Crown className="w-4 h-4 mr-2" />
                  Plano de Interesse *
                </Label>
                <Select
                  value={formData.plano}
                  onValueChange={(value) => handleInputChange("plano", value)}
                  disabled={isSubmitting}
                >
                  <SelectTrigger
                    className={`bg-white/10 border-white/20 text-white focus:border-yellow-400 ${
                      errors.plano ? "border-red-500" : ""
                    }`}
                  >
                    <SelectValue placeholder="Selecione um plano" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700">
                    {planos.map((plano) => (
                      <SelectItem key={plano.value} value={plano.value} className="text-white hover:bg-gray-800">
                        <div className="flex items-center justify-between w-full">
                          <span>{plano.label}</span>
                          {plano.popular && <Badge className="ml-2 bg-yellow-500 text-black text-xs">Popular</Badge>}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.plano && <p className="text-red-400 text-xs">{errors.plano}</p>}
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-white flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensagem *
                </Label>
                <Textarea
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange("mensagem", e.target.value)}
                  className={`bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-yellow-400 min-h-[120px] resize-none ${
                    errors.mensagem ? "border-red-500" : ""
                  }`}
                  placeholder="Conte-nos um pouco sobre sua história e por que gostaria de participar da INpulse..."
                  disabled={isSubmitting}
                  maxLength={500}
                />
                {errors.mensagem && <p className="text-red-400 text-xs">{errors.mensagem}</p>}
                <p className="text-gray-400 text-xs">{formData.mensagem.length}/500 caracteres</p>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="newsletter" className="text-white text-sm leading-relaxed">
                    Quero receber novidades, dicas e informações sobre futuras edições da INpulse por e-mail
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termos"
                    checked={formData.termos}
                    onCheckedChange={(checked) => handleInputChange("termos", checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500"
                    disabled={isSubmitting}
                  />
                  <Label htmlFor="termos" className="text-white text-sm leading-relaxed">
                    Aceito os{" "}
                    <Link href="/termos-uso" className="text-yellow-400 hover:text-yellow-300 underline">
                      termos e condições
                    </Link>{" "}
                    e{" "}
                    <Link href="/politica-privacidade" className="text-yellow-400 hover:text-yellow-300 underline">
                      política de privacidade
                    </Link>{" "}
                    *
                  </Label>
                </div>
                {errors.termos && <p className="text-red-400 text-xs">{errors.termos}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting || !isOnline}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 text-base rounded-full transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : !isOnline ? (
                    <>
                      <WifiOff className="w-5 h-5 mr-2" />
                      Sem Conexão
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Solicitação
                    </>
                  )}
                </Button>
              </div>

              {/* Informações Adicionais */}
              <div className="text-center pt-4 border-t border-white/20">
                <p className="text-gray-400 text-sm mb-2">Ou entre em contato diretamente:</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <a
                    href="https://wa.me/5562991023709"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    (62) 99102-3709
                  </a>
                  <a
                    href="mailto:contato@revistainpulse.com"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    contato@revistainpulse.com
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </ScrollScale>
    </div>
  )
}
