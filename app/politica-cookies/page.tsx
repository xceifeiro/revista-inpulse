"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollFadeIn, ScrollSlideIn } from "@/components/scroll-animations"
import {
  Cookie,
  Settings,
  BarChart3,
  Shield,
  Eye,
  Trash2,
  Calendar,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import { useState } from "react"

export default function PoliticaCookies() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Sempre ativo
    analytics: true,
    marketing: false,
    functional: true,
  })

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    if (type === "essential") return // Não pode ser desabilitado

    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const savePreferences = () => {
    // Aqui você salvaria as preferências nos cookies
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences))
    alert("Preferências salvas com sucesso!")
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 text-sm font-semibold">
                <Cookie className="w-4 h-4 mr-2" />
                POLÍTICA DE COOKIES
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Como usamos{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  cookies
                </span>{" "}
                em nosso site
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Entenda como utilizamos cookies para melhorar sua experiência no site da Revista INpulse
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Última atualização: 27 de Janeiro de 2025
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* O que são Cookies */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollFadeIn>
              <Card className="border-l-4 border-l-yellow-400">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">O que são Cookies?</h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador,
                        tablet ou smartphone) quando você visita um site. Eles são amplamente utilizados para fazer os
                        sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Os cookies não podem danificar seu dispositivo ou arquivos, e não podem acessar informações
                        pessoais armazenadas em seu computador.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeIn>

            {/* Tipos de Cookies */}
            <ScrollSlideIn direction="left">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-yellow-600" />
                  Tipos de Cookies que Utilizamos
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-green-400">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-green-500" />
                          Cookies Essenciais
                        </h3>
                        <Badge className="bg-green-100 text-green-800">Obrigatórios</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        Necessários para o funcionamento básico do site. Não podem ser desabilitados.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Manter sua sessão ativa</li>
                        <li>• Lembrar suas preferências de idioma</li>
                        <li>• Garantir a segurança do site</li>
                        <li>• Funcionalidade do formulário de contato</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-400">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
                          Cookies Analíticos
                        </h3>
                        <Badge className="bg-blue-100 text-blue-800">Opcionais</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        Nos ajudam a entender como os visitantes interagem com o site.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Número de visitantes</li>
                        <li>• Páginas mais visitadas</li>
                        <li>• Tempo de permanência</li>
                        <li>• Origem do tráfego</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-400">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Eye className="w-5 h-5 mr-2 text-purple-500" />
                          Cookies Funcionais
                        </h3>
                        <Badge className="bg-purple-100 text-purple-800">Opcionais</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Melhoram a funcionalidade e personalização do site.</p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Lembrar dados do formulário</li>
                        <li>• Preferências de exibição</li>
                        <li>• Configurações de acessibilidade</li>
                        <li>• Chat e suporte online</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-400">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                          <Globe className="w-5 h-5 mr-2 text-orange-500" />
                          Cookies de Marketing
                        </h3>
                        <Badge className="bg-orange-100 text-orange-800">Opcionais</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        Utilizados para exibir anúncios relevantes e medir campanhas.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Rastreamento de conversões</li>
                        <li>• Remarketing</li>
                        <li>• Anúncios personalizados</li>
                        <li>• Redes sociais integradas</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollSlideIn>

            {/* Gerenciar Preferências */}
            <ScrollSlideIn direction="right">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-yellow-600" />
                  Gerenciar Suas Preferências
                </h2>
                <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-6">
                      Você pode controlar quais tipos de cookies aceita. Note que desabilitar alguns cookies pode afetar
                      a funcionalidade do site.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-green-500" />
                          <div>
                            <h4 className="font-medium text-gray-900">Cookies Essenciais</h4>
                            <p className="text-gray-600 text-sm">Sempre ativos - necessários para o funcionamento</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="ml-2 text-sm text-gray-600">Ativo</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <BarChart3 className="w-5 h-5 text-blue-500" />
                          <div>
                            <h4 className="font-medium text-gray-900">Cookies Analíticos</h4>
                            <p className="text-gray-600 text-sm">Nos ajudam a melhorar o site</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange("analytics")}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            cookiePreferences.analytics ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              cookiePreferences.analytics ? "translate-x-6" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-purple-500" />
                          <div>
                            <h4 className="font-medium text-gray-900">Cookies Funcionais</h4>
                            <p className="text-gray-600 text-sm">Melhoram sua experiência</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange("functional")}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            cookiePreferences.functional ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              cookiePreferences.functional ? "translate-x-6" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-orange-500" />
                          <div>
                            <h4 className="font-medium text-gray-900">Cookies de Marketing</h4>
                            <p className="text-gray-600 text-sm">Para anúncios relevantes</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handlePreferenceChange("marketing")}
                          className={`w-12 h-6 rounded-full transition-colors ${
                            cookiePreferences.marketing ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full transition-transform ${
                              cookiePreferences.marketing ? "translate-x-6" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button
                        onClick={savePreferences}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 py-2"
                      >
                        Salvar Preferências
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollSlideIn>

            {/* Cookies de Terceiros */}
            <ScrollFadeIn>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 mr-3 text-yellow-600" />
                  Cookies de Terceiros
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">
                        Nosso site pode conter cookies de terceiros para fornecer funcionalidades adicionais:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Google Analytics</h3>
                          <ul className="text-gray-600 text-sm space-y-1">
                            <li>• Análise de tráfego do site</li>
                            <li>• Relatórios de comportamento</li>
                            <li>• Dados demográficos</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-3">Redes Sociais</h3>
                          <ul className="text-gray-600 text-sm space-y-1">
                            <li>• Botões de compartilhamento</li>
                            <li>• Widgets do Instagram</li>
                            <li>• Integração com WhatsApp</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Controle de Cookies de Terceiros</h3>
                      <p className="text-gray-600 mb-4">
                        Para mais informações sobre como controlar cookies de terceiros, visite:
                      </p>
                      <div className="space-y-2">
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-600 hover:text-blue-800 text-sm"
                        >
                          • Política de Privacidade do Google
                        </a>
                        <a
                          href="https://www.facebook.com/privacy/explanation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-600 hover:text-blue-800 text-sm"
                        >
                          • Política de Privacidade do Facebook
                        </a>
                        <a
                          href="https://help.instagram.com/519522125107875"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-blue-600 hover:text-blue-800 text-sm"
                        >
                          • Política de Privacidade do Instagram
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Como Gerenciar Cookies */}
            <ScrollSlideIn direction="left">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trash2 className="w-6 h-6 mr-3 text-yellow-600" />
                  Como Gerenciar Cookies no Seu Navegador
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Monitor className="w-6 h-6 mr-3 text-blue-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Navegadores Desktop</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900">Google Chrome</h4>
                          <p className="text-gray-600 text-sm">
                            Configurações → Privacidade e segurança → Cookies e outros dados do site
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Mozilla Firefox</h4>
                          <p className="text-gray-600 text-sm">
                            Opções → Privacidade e Segurança → Cookies e dados de sites
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Safari</h4>
                          <p className="text-gray-600 text-sm">Preferências → Privacidade → Gerenciar dados do site</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Smartphone className="w-6 h-6 mr-3 text-green-500" />
                        <h3 className="text-lg font-semibold text-gray-900">Dispositivos Móveis</h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900">Android (Chrome)</h4>
                          <p className="text-gray-600 text-sm">
                            Menu → Configurações → Configurações do site → Cookies
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">iOS (Safari)</h4>
                          <p className="text-gray-600 text-sm">
                            Ajustes → Safari → Privacidade e Segurança → Bloquear cookies
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Aplicativos</h4>
                          <p className="text-gray-600 text-sm">
                            Verifique as configurações de privacidade de cada aplicativo
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-6 border-l-4 border-l-orange-400">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Importante</h3>
                        <p className="text-gray-600 text-sm">
                          Desabilitar todos os cookies pode afetar a funcionalidade do site. Algumas páginas podem não
                          carregar corretamente ou certas funcionalidades podem não estar disponíveis.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollSlideIn>

            {/* Duração dos Cookies */}
            <ScrollFadeIn>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-yellow-600" />
                  Duração dos Cookies
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies de Sessão</h3>
                      <p className="text-gray-600 text-sm">
                        Expiram quando você fecha o navegador. Usados para funcionalidades básicas.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cookies Persistentes</h3>
                      <p className="text-gray-600 text-sm">
                        Permanecem por um período determinado (até 2 anos). Lembram suas preferências.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trash2 className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Limpeza Automática</h3>
                      <p className="text-gray-600 text-sm">
                        Removemos cookies desnecessários regularmente para otimizar o desempenho.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Contato */}
            <ScrollFadeIn>
              <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-yellow-600" />
                    Dúvidas sobre Cookies?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Se você tiver dúvidas sobre nossa política de cookies ou precisar de ajuda para gerenciar suas
                    preferências, entre em contato conosco:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Contato Direto</h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="text-sm">📧 privacidade@revistainpulse.com</p>
                        <p className="text-sm">📱 (62) 99102-3709</p>
                        <p className="text-sm">🌐 www.revistainpulse.com</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                      <div className="space-y-1 text-gray-600 text-sm">
                        <p>Segunda a Sexta: 9h às 18h</p>
                        <p>Sábado: 9h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
