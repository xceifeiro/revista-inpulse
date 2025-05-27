"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollFadeIn, ScrollSlideIn } from "@/components/scroll-animations"
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Camera,
  Copyright,
  ArrowLeft,
  Calendar,
  Gavel,
  Shield,
} from "lucide-react"

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 text-sm font-semibold">
                <FileText className="w-4 h-4 mr-2" />
                TERMOS DE USO
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Termos e{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                  Condições
                </span>{" "}
                de Uso
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Conheça os termos que regem o uso do nosso site e a participação na Revista INpulse
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
                  { name: "Aceitação", id: "aceitacao" },
                  { name: "Serviços", id: "servicos" },
                  { name: "Pagamentos", id: "pagamentos" },
                  { name: "Propriedade", id: "propriedade" },
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
            {/* Aceitação dos Termos */}
            <ScrollFadeIn id="aceitacao">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-yellow-600" />
                  1. Aceitação dos Termos
                </h2>
                <Card className="border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">
                      Ao acessar e usar o site da Revista INpulse, ou ao solicitar participação em nossa publicação,
                      você concorda em cumprir e estar vinculado a estes Termos de Uso.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        <strong>Importante:</strong> Se você não concordar com qualquer parte destes termos, não deve
                        usar nossos serviços ou site.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollFadeIn>

            {/* Descrição dos Serviços */}
            <ScrollSlideIn direction="left" id="servicos">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Camera className="w-6 h-6 mr-3 text-yellow-600" />
                  2. Descrição dos Serviços
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">A Revista INpulse oferece:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Publicação Editorial</h4>
                              <p className="text-gray-600 text-sm">
                                Participação em revista impressa e digital de alta qualidade
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Sessão Fotográfica</h4>
                              <p className="text-gray-600 text-sm">Ensaio profissional com fotógrafo especializado</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Consultoria Editorial</h4>
                              <p className="text-gray-600 text-sm">Apoio na criação e edição do conteúdo</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Evento de Lançamento</h4>
                              <p className="text-gray-600 text-sm">
                                Participação no evento cinematográfico de lançamento
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Promoção Digital</h4>
                              <p className="text-gray-600 text-sm">Divulgação em redes sociais e canais digitais</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900">Exemplares Físicos</h4>
                              <p className="text-gray-600 text-sm">Entrega de exemplares impressos da revista</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Processo de Participação:</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                            1
                          </div>
                          <p className="text-gray-600">Solicitação através do formulário ou contato direto</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                            2
                          </div>
                          <p className="text-gray-600">Análise da solicitação e contato para alinhamento</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                            3
                          </div>
                          <p className="text-gray-600">Assinatura do contrato e pagamento</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                            4
                          </div>
                          <p className="text-gray-600">Produção do conteúdo e sessão fotográfica</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-sm">
                            5
                          </div>
                          <p className="text-gray-600">Publicação e evento de lançamento</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollSlideIn>

            {/* Condições de Pagamento */}
            <ScrollSlideIn direction="right" id="pagamentos">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-yellow-600" />
                  3. Condições de Pagamento
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Valores e Planos:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Capa</span>
                            <span className="text-yellow-600 font-bold">R$ 6.720</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Contracapa</span>
                            <span className="text-yellow-600 font-bold">R$ 4.644</span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Página Dupla</span>
                            <span className="text-yellow-600 font-bold">R$ 3.470</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="font-medium">Página Completa</span>
                            <span className="text-yellow-600 font-bold">R$ 1.560</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Condições de Pagamento:</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Formas de Pagamento</h4>
                            <p className="text-gray-600 text-sm">
                              PIX, transferência bancária, cartão de crédito (parcelamento disponível)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Entrada</h4>
                            <p className="text-gray-600 text-sm">
                              50% do valor total na assinatura do contrato para início da produção
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900">Saldo</h4>
                            <p className="text-gray-600 text-sm">50% restante antes da publicação final da revista</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                        Política de Cancelamento
                      </h3>
                      <div className="space-y-3">
                        <p className="text-gray-600">
                          <strong>Até 7 dias após assinatura:</strong> Cancelamento com reembolso integral (direito de
                          arrependimento)
                        </p>
                        <p className="text-gray-600">
                          <strong>Após início da produção:</strong> Cancelamento sujeito a cobrança de custos já
                          incorridos
                        </p>
                        <p className="text-gray-600">
                          <strong>Após sessão fotográfica:</strong> Não há reembolso, mas o cliente mantém direitos
                          sobre o material produzido
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollSlideIn>

            {/* Propriedade Intelectual */}
            <ScrollSlideIn direction="left" id="propriedade">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Copyright className="w-6 h-6 mr-3 text-yellow-600" />
                  4. Propriedade Intelectual
                </h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Direitos do Participante:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Você mantém todos os direitos sobre sua história pessoal e informações fornecidas
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Direito de uso das fotografias produzidas para fins pessoais e profissionais
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Autorização para uso de sua imagem e história na revista e materiais promocionais
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Direitos da Revista INpulse:</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Direitos autorais sobre o layout, design e composição editorial da revista
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">
                            Direito de uso das fotografias para fins editoriais e promocionais da revista
                          </p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">Propriedade da marca "INpulse" e elementos visuais associados</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollSlideIn>

            {/* Responsabilidades */}
            <ScrollFadeIn>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-yellow-600" />
                  5. Responsabilidades e Limitações
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-green-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        Nossos Compromissos
                      </h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Entregar serviços conforme especificado no contrato</li>
                        <li>• Manter qualidade editorial e fotográfica profissional</li>
                        <li>• Cumprir prazos acordados para produção e entrega</li>
                        <li>• Proteger informações pessoais conforme LGPD</li>
                        <li>• Fornecer suporte durante todo o processo</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-400">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                        Limitações
                      </h3>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Não garantimos resultados específicos de negócios</li>
                        <li>• Não somos responsáveis por interpretações de terceiros</li>
                        <li>• Prazos podem ser afetados por fatores externos</li>
                        <li>• Mudanças no escopo podem gerar custos adicionais</li>
                        <li>• Sujeito a aprovação final do conteúdo pelo cliente</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollFadeIn>

            {/* Lei Aplicável */}
            <ScrollFadeIn>
              <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Gavel className="w-6 h-6 mr-3 text-yellow-600" />
                    6. Lei Aplicável e Foro
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Estes Termos de Uso são regidos pelas leis brasileiras, especialmente:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Código de Defesa do Consumidor (Lei 8.078/90)</li>
                      <li>• Lei Geral de Proteção de Dados (Lei 13.709/18)</li>
                      <li>• Marco Civil da Internet (Lei 12.965/14)</li>
                      <li>• Código Civil Brasileiro</li>
                    </ul>
                    <p className="text-gray-600">
                      <strong>Foro:</strong> Fica eleito o foro da comarca de Goiânia/GO para dirimir quaisquer
                      controvérsias decorrentes destes termos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollFadeIn>

            {/* Alterações */}
            <ScrollFadeIn>
              <Card className="border-l-4 border-l-blue-400">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-3 text-yellow-600" />
                    7. Alterações nos Termos
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão
                    em vigor imediatamente após sua publicação no site.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Recomendação:</strong> Revise periodicamente estes termos para estar ciente de quaisquer
                      mudanças. O uso continuado de nossos serviços após as alterações constitui aceitação dos novos
                      termos.
                    </p>
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
