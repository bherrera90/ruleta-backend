#!/bin/bash

# Script para probar todos los endpoints de la API de Ruleta Game
# Uso: ./test_api.sh

echo "🧪 PROBANDO API DE RULETA GAME"
echo "================================"

BASE_URL="http://localhost:3000"

# Función para hacer peticiones y mostrar resultados
test_endpoint() {
    local name="$1"
    local url="$2"
    echo ""
    echo "📋 Probando: $name"
    echo "🔗 URL: $url"
    echo "📄 Respuesta:"
    curl -s "$url" | jq '.' || echo "❌ Error en la petición"
    echo "---"
}

# Verificar si el servidor está corriendo
echo "🔍 Verificando si el servidor está activo..."
if curl -s "$BASE_URL" > /dev/null; then
    echo "✅ Servidor activo en $BASE_URL"
else
    echo "❌ Servidor no está corriendo. Ejecuta 'npm start' primero."
    exit 1
fi

# Probar endpoints principales
test_endpoint "Página de bienvenida" "$BASE_URL"
test_endpoint "Información de la API" "$BASE_URL/api/info"

# Categorías
test_endpoint "Todas las categorías" "$BASE_URL/api/categories"
test_endpoint "Categoría específica (ID: 1)" "$BASE_URL/api/categories/1"

# Preguntas
test_endpoint "Todas las preguntas" "$BASE_URL/api/questions"
test_endpoint "Pregunta aleatoria" "$BASE_URL/api/questions/random"
test_endpoint "Pregunta aleatoria por categoría" "$BASE_URL/api/questions/random?categoryId=1"
test_endpoint "Pregunta específica (ID: 1)" "$BASE_URL/api/questions/1"

# Frases motivacionales
test_endpoint "Todas las frases motivacionales" "$BASE_URL/api/phrases"
test_endpoint "Frases por emoción (alegría)" "$BASE_URL/api/phrases/alegria"
test_endpoint "Frase aleatoria (alegría)" "$BASE_URL/api/phrases/alegria/random"
test_endpoint "Frase aleatoria (tristeza)" "$BASE_URL/api/phrases/tristeza/random"

# Mensajes de juego
test_endpoint "Todos los mensajes de juego" "$BASE_URL/api/game-messages"
test_endpoint "Mensajes tipo 'curiosamente'" "$BASE_URL/api/game-messages/curiosamente"
test_endpoint "Mensaje aleatorio 'curiosamente'" "$BASE_URL/api/game-messages/curiosamente/random"
test_endpoint "Mensaje aleatorio 'puzzle'" "$BASE_URL/api/game-messages/puzzle/random"

# Mensajes por emoción
test_endpoint "Todos los mensajes emocionales" "$BASE_URL/api/emotion-messages"
test_endpoint "Mensajes para ansiedad" "$BASE_URL/api/emotion-messages/ansiedad"
test_endpoint "Mensaje aleatorio para ansiedad" "$BASE_URL/api/emotion-messages/ansiedad/random"
test_endpoint "Mensaje aleatorio para estrés" "$BASE_URL/api/emotion-messages/estres/random"

echo ""
echo "🎉 ¡Pruebas completadas!"
echo "================================"
