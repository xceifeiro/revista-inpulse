#!/bin/bash

# Script para build e deploy com Docker

echo "🚀 Iniciando build da Revista INpulse..."

# Verificar se o Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker não está rodando. Inicie o Docker e tente novamente."
    exit 1
fi

# Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
docker system prune -f

# Build da imagem
echo "🔨 Fazendo build da imagem..."
docker build -t revista-inpulse:latest .

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    
    # Parar container anterior se existir
    echo "🛑 Parando container anterior..."
    docker stop revista-inpulse-container 2>/dev/null || true
    docker rm revista-inpulse-container 2>/dev/null || true
    
    # Executar novo container
    echo "🚀 Iniciando novo container..."
    docker run -d \
        --name revista-inpulse-container \
        -p 3000:3000 \
        --env-file .env.local \
        --restart unless-stopped \
        revista-inpulse:latest
    
    echo "🎉 Aplicação rodando em http://localhost:3000"
    echo "📊 Para ver logs: docker logs -f revista-inpulse-container"
    echo "🛑 Para parar: docker stop revista-inpulse-container"
    
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi
