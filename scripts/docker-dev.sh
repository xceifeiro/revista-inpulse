#!/bin/bash

# Script para desenvolvimento com Docker

echo "🔧 Iniciando ambiente de desenvolvimento..."

# Verificar se o arquivo .env.local existe
if [ ! -f .env.local ]; then
    echo "⚠️  Arquivo .env.local não encontrado. Criando exemplo..."
    cp .env.example .env.local
    echo "📝 Configure as variáveis em .env.local antes de continuar."
    exit 1
fi

# Parar containers de desenvolvimento anteriores
echo "🛑 Parando containers anteriores..."
docker-compose -f docker-compose.yml down

# Iniciar ambiente de desenvolvimento
echo "🚀 Iniciando ambiente de desenvolvimento..."
docker-compose -f docker-compose.yml up --build -d

echo "🎉 Ambiente de desenvolvimento rodando!"
echo "🌐 Aplicação: http://localhost:3000"
echo "📊 Logs: docker-compose logs -f"
echo "🛑 Parar: docker-compose down"
