import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Interface para os dados do formulário
interface ContactFormData {
  nome: string
  email: string
  telefone: string
  cidade: string
  profissao?: string
  empresa?: string
  plano: string
  mensagem: string
  newsletter: boolean
  termos: boolean
}

// Configuração do transportador de email
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true para 465, false para outras portas
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

// Template de email para a equipe
const createTeamEmailTemplate = (data: ContactFormData) => {
  const planoLabels: { [key: string]: string } = {
    capa: "Capa - R$ 6.720",
    contracapa: "Contracapa - R$ 4.644",
    "pagina-dupla": "Página Dupla - R$ 3.470",
    "pagina-completa": "Página Completa - R$ 1.560",
    informacoes: "Quero mais informações",
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #fbbf24; }
        .highlight { background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🌟 Nova Solicitação - Revista INpulse</h1>
          <p>Um novo interessado quer participar da revista!</p>
        </div>
        
        <div class="content">
          <div class="highlight">
            <strong>📋 Plano de Interesse:</strong> ${planoLabels[data.plano] || data.plano}
          </div>
          
          <div class="field">
            <div class="label">👤 Nome Completo:</div>
            <div class="value">${data.nome}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 E-mail:</div>
            <div class="value">${data.email}</div>
          </div>
          
          <div class="field">
            <div class="label">📱 Telefone/WhatsApp:</div>
            <div class="value">${data.telefone}</div>
          </div>
          
          <div class="field">
            <div class="label">📍 Cidade:</div>
            <div class="value">${data.cidade}</div>
          </div>
          
          ${
            data.profissao
              ? `
          <div class="field">
            <div class="label">💼 Profissão:</div>
            <div class="value">${data.profissao}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.empresa
              ? `
          <div class="field">
            <div class="label">🏢 Empresa:</div>
            <div class="value">${data.empresa}</div>
          </div>
          `
              : ""
          }
          
          <div class="field">
            <div class="label">💬 Mensagem:</div>
            <div class="value">${data.mensagem}</div>
          </div>
          
          <div class="field">
            <div class="label">📬 Newsletter:</div>
            <div class="value">${data.newsletter ? "✅ Sim, quer receber novidades" : "❌ Não quer receber"}</div>
          </div>
          
          <div class="footer">
            <p>📅 Recebido em: ${new Date().toLocaleString("pt-BR")}</p>
            <p>🚀 Sistema Revista INpulse</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

// Template de email de confirmação para o cliente
const createClientEmailTemplate = (data: ContactFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .welcome { background: #fef3c7; padding: 20px; border-radius: 6px; margin: 20px 0; text-align: center; }
        .next-steps { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .contact-info { background: #1f2937; color: white; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
        .button { display: inline-block; background: #fbbf24; color: #1f2937; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✨ Obrigado pelo seu interesse!</h1>
          <p>Revista INpulse - Registrar Legados, Não Vender Imagem</p>
        </div>
        
        <div class="content">
          <div class="welcome">
            <h2>Olá, ${data.nome}! 👋</h2>
            <p>Recebemos sua solicitação e ficamos muito felizes com seu interesse em participar da Revista INpulse!</p>
          </div>
          
          <div class="next-steps">
            <h3>🎯 Próximos Passos:</h3>
            <ul>
              <li><strong>Análise:</strong> Nossa equipe analisará sua solicitação em até 24 horas</li>
              <li><strong>Contato:</strong> Entraremos em contato via WhatsApp para agendar uma conversa</li>
              <li><strong>Personalização:</strong> Vamos personalizar sua participação de acordo com sua história</li>
              <li><strong>Produção:</strong> Iniciaremos o processo de criação do seu legado</li>
            </ul>
          </div>
          
          <div class="contact-info">
            <h3>📞 Contato Direto:</h3>
            <p><strong>WhatsApp:</strong> (62) 99102-3709</p>
            <p><strong>Instagram:</strong> @lucenaclaudiaa | @grupoinpulse</p>
            <p><strong>E-mail:</strong> contato@revistainpulse.com</p>
            
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://wa.me/5562991023709" class="button">💬 Falar no WhatsApp</a>
            </div>
          </div>
          
          <div class="footer">
            <p><em>"Dono do Tudo – idealizado no coração de Deus"</em></p>
            <p>🌟 Sua história merece ser eternizada</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
    // Parse dos dados do formulário
    const data: ContactFormData = await request.json()

    // Validação básica
    if (!data.nome || !data.email || !data.telefone || !data.cidade || !data.plano || !data.mensagem) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    if (!data.termos) {
      return NextResponse.json({ error: "É necessário aceitar os termos e condições" }, { status: 400 })
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 })
    }

    // Verificar se as variáveis de ambiente estão configuradas
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Variáveis de ambiente SMTP não configuradas")
      return NextResponse.json({ error: "Configuração de email não encontrada" }, { status: 500 })
    }

    // Criar transportador
    const transporter = createTransporter()

    // Verificar conexão
    await transporter.verify()

    // Email para a equipe
    const teamMailOptions = {
      from: `"Revista INpulse" <${process.env.SMTP_USER}>`,
      to: process.env.TEAM_EMAIL || process.env.SMTP_USER,
      subject: `🌟 Nova Solicitação - ${data.nome} (${data.plano})`,
      html: createTeamEmailTemplate(data),
    }

    // Email de confirmação para o cliente
    const clientMailOptions = {
      from: `"Revista INpulse" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "✨ Confirmação de Solicitação - Revista INpulse",
      html: createClientEmailTemplate(data),
    }

    // Enviar emails
    const [teamResult, clientResult] = await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(clientMailOptions),
    ])

    console.log("Emails enviados:", {
      team: teamResult.messageId,
      client: clientResult.messageId,
    })

    // Resposta de sucesso
    return NextResponse.json({
      success: true,
      message: "Formulário enviado com sucesso! Verifique seu e-mail.",
      data: {
        nome: data.nome,
        email: data.email,
        plano: data.plano,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Erro ao enviar email:", error)

    // Tratamento de erros específicos
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json({ error: "Erro de autenticação do email" }, { status: 500 })
      }

      if (error.message.includes("Network")) {
        return NextResponse.json({ error: "Erro de conexão. Tente novamente." }, { status: 503 })
      }
    }

    return NextResponse.json(
      { error: "Erro interno do servidor. Tente novamente ou entre em contato via WhatsApp." },
      { status: 500 },
    )
  }
}

// Método GET para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json({
    status: "API de contato funcionando",
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: "/api/contact - Enviar formulário de contato",
    },
  })
}
