"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollFadeIn, ScrollSlideIn } from "@/components/scroll-animations"
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Phone,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Users,
  Globe,
  FileText,
  Calendar,
} from "lucide-react"

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 text-sm font-semibold">
                <Shield className="w-4 h-4 mr-2" />
                POLÍTICA DE PRIVACIDADE
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Sua{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  privacidade
                </span>{" "}
                é nossa prioridade
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Entenda como coletamos, usamos e protegemos suas informações pessoais na Revista INpulse
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

      {/* Navegação Rápida */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollSlideIn direction="up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Navegação Rápida:</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Coleta de Dados", id: "coleta" },
                  { name: "Uso das Informações", id: "uso" },
                  { name: "Compartilhamento", id: "compartilhamento" },
                  { name: "Seus Direitos", id: "direitos" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </ScrollSlideIn>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introdução */}
            <ScrollFadeIn>
              <Card className="border-l-4 border-l-yellow-400">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Compromisso com a Privacidade</h3>
                      <p className="text-gray-600 leading-relaxed">
                        A Revista INpulse está comprometida em proteger e respeitar sua privacidade. Esta política
                        explica como coletamos, usamos e protegemos suas informações pessoais quando você interage
                        conosco através do nosso site, formulários ou outros canais de comunicação.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeIn>

            {/* Coleta de Dados */}
            <ScrollSlideIn direction="left" id="coleta">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-yellow-600" />
                  1. Coleta de Informações
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações que Coletamos:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Dados Pessoais
                          </h4>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• Nome completo</li>
                            <li>• Endereço de e-mail</li>
                            <li>• Número de telefone</li>
                            <li>• Cidade de residência</li>
                            <li>• Profissão e empresa</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Dados Técnicos
                          </h4>
                          <ul className="text-gray-600 space-y-1 text-sm">
                            <li>• Endereço IP</li>
                            <li>• Tipo de navegador</li>
                            <li>• Páginas visitadas</li>
                            <li>• Tempo de permanência</li>
                            <li>• Dispositivo utilizado</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Como Coletamos:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">
                            <strong>Formulários:</strong> Quando você preenche nosso formulário de contato ou
                            solicitação de participação
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">
                            <strong>Navegação:</strong> Automaticamente através de cookies e tecnologias similares
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">
                            <strong>Comunicação:</strong> Quando você entra em contato conosco por e-mail, WhatsApp ou
                            redes sociais
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollSlideIn>

            {/* Uso das Informações */}
            <ScrollSlideIn direction="right" id="uso">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-yellow-600" />
                  2. Uso das Informações
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">
                      Utilizamos suas informações pessoais para os seguintes propósitos legítimos:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Prestação de Serviços</h4>
                            <p className="text-gray-600 text-sm">
                              Processar sua solicitação de participação na revista e fornecer informações sobre nossos
                              serviços
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Comunicação</h4>
                            <p className="text-gray-600 text-sm">
                              Entrar em contato para esclarecer dúvidas, agendar reuniões e acompanhar o processo
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Personalização</h4>
                            <p className="text-gray-600 text-sm">
                              Adaptar nossa abordagem e propostas de acordo com seu perfil e necessidades
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Marketing (com consentimento)</h4>
                            <p className="text-gray-600 text-sm">
                              Enviar newsletters e informações sobre futuras edições, apenas se você optar por receber
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Melhoria dos Serviços</h4>
                            <p className="text-gray-600 text-sm">
                              Analisar o uso do site para melhorar a experiência do usuário e nossos processos
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Cumprimento Legal</h4>
                            <p className="text-gray-600 text-sm">
                              Atender obrigações legais e regulamentares aplicáveis ao nosso negócio
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollSlideIn>

            {/* Compartilhamento */}
            <ScrollSlideIn direction="left" id="compartilhamento">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-yellow-600" />
                  3. Compartilhamento de Informações
                </h2>
                <div className="space-y-6">
                  <Card className="border-l-4 border-l-green-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        Quando Compartilhamos
                      </h3>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          <strong>Prestadores de Serviços:</strong> Compartilhamos com fornecedores que nos ajudam a
                          operar nosso negócio (ex: serviços de e-mail, hospedagem, fotografia)
                        </p>
                        <p className="text-gray-600">
                          <strong>Parceiros Editoriais:</strong> Com profissionais envolvidos na produção da revista
                          (fotógrafos, editores, designers) sob acordos de confidencialidade
                        </p>
                        <p className="text-gray-600">
                          <strong>Obrigações Legais:</strong> Quando exigido por lei, ordem judicial ou autoridades
                          competentes
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                        Quando NÃO Compartilhamos
                      </h3>
                      <div className="space-y-2">
                        <p className="text-gray-600">• Nunca vendemos suas informações pessoais para terceiros</p>
                        <p className="text-gray-600">• Não compartilhamos para fins publicitários sem consentimento</p>
                        <p className="text-gray-600">• Não transferimos dados para países sem proteção adequada</p>
                        <p className="text-gray-600">
                          • Não usamos suas informações para fins não relacionados à revista
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollSlideIn>

            {/* Direitos do Usuário */}
            <ScrollSlideIn direction="right" id="direitos">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-yellow-600" />
                  4. Seus Direitos (LGPD)
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">
                      De acordo com a Lei Geral de Proteção de Dados (LGPD), você possui os seguintes direitos:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Eye className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Acesso</h4>
                            <p className="text-gray-600 text-sm">
                              Solicitar informações sobre quais dados pessoais possuímos sobre você
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Correção</h4>
                            <p className="text-gray-600 text-sm">
                              Solicitar a correção de dados incompletos, inexatos ou desatualizados
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Globe className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Portabilidade</h4>
                            <p className="text-gray-600 text-sm">
                              Solicitar a transferência de seus dados para outro fornecedor
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Eliminação</h4>
                            <p className="text-gray-600 text-sm">
                              Solicitar a exclusão de dados desnecessários ou tratados em desconformidade
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Lock className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Oposição</h4>
                            <p className="text-gray-600 text-sm">
                              Opor-se ao tratamento realizado com base no legítimo interesse
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Revogação</h4>
                            <p className="text-gray-600 text-sm">
                              Revogar o consentimento para tratamento de dados a qualquer momento
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollSlideIn>

            {/* Segurança */}
            <ScrollFadeIn>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-yellow-600" />
                  5. Segurança dos Dados
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Lock className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Criptografia</h3>
                        <p className="text-gray-600 text-sm">
                          Todos os dados são transmitidos usando criptografia SSL/TLS
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Database className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Armazenamento Seguro</h3>
                        <p className="text-gray-600 text-sm">
                          Dados armazenados em servidores seguros com acesso restrito
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Acesso Limitado</h3>
                        <p className="text-gray-600 text-sm">
                          Apenas funcionários autorizados têm acesso aos dados pessoais
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollFadeIn>

            {/* Contato */}
            <ScrollFadeIn>
              <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Mail className="w-6 h-6 mr-3 text-yellow-600" />
                    Exercer Seus Direitos
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Para exercer qualquer um dos seus direitos ou esclarecer dúvidas sobre esta política, entre em
                    contato conosco:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Encarregado de Dados (DPO)</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>privacidade@revistainpulse.com</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>(62) 99102-3709</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Prazo de Resposta</h3>
                      <p className="text-gray-600 text-sm">
                        Responderemos às suas solicitações em até 15 dias úteis, conforme estabelecido pela LGPD.
                      </p>
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
