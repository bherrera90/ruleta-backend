const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// ============= MIDDLEWARES =============
// Seguridad básica
app.use(helmet());

// CORS - Permitir peticiones desde Flutter
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', '*'], // Permitir todas las origins para desarrollo
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Logging de peticiones
app.use(morgan('combined'));

// Parser de JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ============= RUTAS =============
// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '¡Bienvenido a la API de Ruleta Game!',
    version: '1.0.0',
    documentation: {
      info: '/api/info',
      categories: '/api/categories',
      questions: '/api/questions',
      phrases: '/api/phrases',
      gameMessages: '/api/game-messages',
      emotionMessages: '/api/emotion-messages'
    },
    timestamp: new Date().toISOString()
  });
});

// Rutas de la API
app.use('/api', apiRoutes);

// ============= MANEJO DE ERRORES =============
// Ruta no encontrada
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint no encontrado',
    requestedUrl: req.originalUrl,
    availableEndpoints: [
      'GET /',
      'GET /api/info',
      'GET /api/categories',
      'GET /api/questions',
      'GET /api/phrases',
      'GET /api/game-messages',
      'GET /api/emotion-messages'
    ]
  });
});

// Manejo global de errores
app.use((error, req, res, next) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? error.message : 'Algo salió mal'
  });
});

// ============= INICIO DEL SERVIDOR =============
app.listen(PORT, () => {
  console.log(`
🚀 ¡Servidor de Ruleta Game API iniciado exitosamente!
📍 URL: http://localhost:${PORT}
🌐 Entorno: ${process.env.NODE_ENV || 'development'}
📚 Documentación: http://localhost:${PORT}/api/info
⏰ Iniciado en: ${new Date().toLocaleString()}

📋 Endpoints disponibles:
   GET  /                           - Información de bienvenida
   GET  /api/info                   - Información de la API
   GET  /api/categories             - Todas las categorías
   GET  /api/categories/:id         - Categoría específica
   GET  /api/questions              - Todas las preguntas
   GET  /api/questions/:id          - Pregunta específica
   GET  /api/questions/random       - Pregunta aleatoria
   GET  /api/phrases                - Todas las frases motivacionales
   GET  /api/phrases/:emotion       - Frases por emoción
   GET  /api/phrases/:emotion/random - Frase aleatoria por emoción
   GET  /api/game-messages          - Todos los mensajes de juego
   GET  /api/game-messages/:type    - Mensajes por tipo
   GET  /api/game-messages/:type/random - Mensaje aleatorio por tipo
   GET  /api/emotion-messages       - Todos los mensajes por emoción
   GET  /api/emotion-messages/:emotion - Mensajes por emoción específica
   GET  /api/emotion-messages/:emotion/random - Mensaje aleatorio por emoción

🎯 ¡Listo para ser consumido desde Flutter!
  `);
});

module.exports = app;
