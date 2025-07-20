const express = require('express');
const router = express.Router();
const {
  ruletaCategories,
  questions,
  motivationalPhrases,
  gameMessages,
  emotionMessages
} = require('../data/models');

// ============= CATEGORÍAS DE RULETA =============
// GET /api/categories - Obtener todas las categorías
router.get('/categories', (req, res) => {
  try {
    res.json({
      success: true,
      data: ruletaCategories,
      message: 'Categorías obtenidas exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener categorías',
      error: error.message
    });
  }
});

// GET /api/categories/:id - Obtener una categoría específica
router.get('/categories/:id', (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    const category = ruletaCategories.find(cat => cat.id === categoryId);
    
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Categoría no encontrada'
      });
    }
    
    res.json({
      success: true,
      data: category,
      message: 'Categoría obtenida exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener la categoría',
      error: error.message
    });
  }
});

// ============= PREGUNTAS =============
// GET /api/questions - Obtener todas las preguntas
router.get('/questions', (req, res) => {
  try {
    const { categoryId } = req.query;
    let filteredQuestions = questions;
    
    if (categoryId) {
      const catId = parseInt(categoryId);
      filteredQuestions = questions.filter(q => q.categoryId === catId);
    }
    
    res.json({
      success: true,
      data: filteredQuestions,
      message: 'Preguntas obtenidas exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener preguntas',
      error: error.message
    });
  }
});

// GET /api/questions/random - Obtener una pregunta aleatoria
router.get('/questions/random', (req, res) => {
  try {
    const { categoryId } = req.query;
    let availableQuestions = questions;
    
    if (categoryId) {
      const catId = parseInt(categoryId);
      availableQuestions = questions.filter(q => q.categoryId === catId);
    }
    
    if (availableQuestions.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No hay preguntas disponibles para esta categoría'
      });
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];
    
    res.json({
      success: true,
      data: randomQuestion,
      message: 'Pregunta aleatoria obtenida exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener pregunta aleatoria',
      error: error.message
    });
  }
});

// GET /api/questions/:id - Obtener una pregunta específica
router.get('/questions/:id', (req, res) => {
  try {
    const questionId = parseInt(req.params.id);
    const question = questions.find(q => q.id === questionId);
    
    if (!question) {
      return res.status(404).json({
        success: false,
        message: 'Pregunta no encontrada'
      });
    }
    
    res.json({
      success: true,
      data: question,
      message: 'Pregunta obtenida exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener la pregunta',
      error: error.message
    });
  }
});

// ============= FRASES MOTIVACIONALES =============
// GET /api/phrases - Obtener todas las frases motivacionales
router.get('/phrases', (req, res) => {
  try {
    res.json({
      success: true,
      data: motivationalPhrases,
      message: 'Frases motivacionales obtenidas exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener frases motivacionales',
      error: error.message
    });
  }
});

// GET /api/phrases/:emotion - Obtener frases por emoción
router.get('/phrases/:emotion', (req, res) => {
  try {
    const emotion = req.params.emotion.toLowerCase();
    const phrases = motivationalPhrases[emotion];
    
    if (!phrases) {
      return res.status(404).json({
        success: false,
        message: 'Emoción no encontrada',
        availableEmotions: Object.keys(motivationalPhrases)
      });
    }
    
    res.json({
      success: true,
      data: phrases,
      emotion: emotion,
      message: `Frases para ${emotion} obtenidas exitosamente`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener frases por emoción',
      error: error.message
    });
  }
});

// GET /api/phrases/:emotion/random - Obtener frase aleatoria por emoción
router.get('/phrases/:emotion/random', (req, res) => {
  try {
    const emotion = req.params.emotion.toLowerCase();
    const phrases = motivationalPhrases[emotion];
    
    if (!phrases || phrases.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Emoción no encontrada o sin frases disponibles',
        availableEmotions: Object.keys(motivationalPhrases)
      });
    }
    
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    
    res.json({
      success: true,
      data: randomPhrase,
      emotion: emotion,
      message: `Frase aleatoria para ${emotion} obtenida exitosamente`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener frase aleatoria',
      error: error.message
    });
  }
});

// ============= MENSAJES DE JUEGO/TRIVIA =============
// GET /api/game-messages - Obtener todos los mensajes de juego
router.get('/game-messages', (req, res) => {
  try {
    res.json({
      success: true,
      data: gameMessages,
      message: 'Mensajes de juego obtenidos exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener mensajes de juego',
      error: error.message
    });
  }
});

// GET /api/game-messages/:type - Obtener mensajes por tipo
router.get('/game-messages/:type', (req, res) => {
  try {
    const messageType = req.params.type.toLowerCase();
    const messages = gameMessages[messageType];
    
    if (!messages) {
      return res.status(404).json({
        success: false,
        message: 'Tipo de mensaje no encontrado',
        availableTypes: Object.keys(gameMessages)
      });
    }
    
    res.json({
      success: true,
      data: messages,
      type: messageType,
      message: `Mensajes de tipo ${messageType} obtenidos exitosamente`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener mensajes por tipo',
      error: error.message
    });
  }
});

// GET /api/game-messages/:type/random - Obtener mensaje aleatorio por tipo
router.get('/game-messages/:type/random', (req, res) => {
  try {
    const messageType = req.params.type.toLowerCase();
    const messages = gameMessages[messageType];
    
    if (!messages || messages.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Tipo de mensaje no encontrado o sin mensajes disponibles',
        availableTypes: Object.keys(gameMessages)
      });
    }
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    res.json({
      success: true,
      data: randomMessage,
      type: messageType,
      message: `Mensaje aleatorio de tipo ${messageType} obtenido exitosamente`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener mensaje aleatorio',
      error: error.message
    });
  }
});

// ============= MENSAJES POR EMOCIÓN =============
// GET /api/emotion-messages - Obtener todos los mensajes por emoción
router.get('/emotion-messages', (req, res) => {
  try {
    res.json({
      success: true,
      data: emotionMessages,
      message: 'Mensajes por emoción obtenidos exitosamente'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener mensajes por emoción',
      error: error.message
    });
  }
});

// GET /api/emotion-messages/:emotion - Obtener mensajes por emoción específica
router.get('/emotion-messages/:emotion', (req, res) => {
  try {
    const emotion = req.params.emotion.toLowerCase();
    const messages = emotionMessages[emotion];
    
    if (!messages) {
      return res.status(404).json({
        success: false,
        message: 'Emoción no encontrada',
        availableEmotions: Object.keys(emotionMessages)
      });
    }
    
    res.json({
      success: true,
      data: messages,
      emotion: emotion,
      message: `Mensajes para ${emotion} obtenidos exitosamente`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener mensajes por emoción',
      error: error.message
    });
  }
});

// GET /api/emotion-messages/:emotion/random - Obtener mensaje aleatorio por emoción
router.get('/emotion-messages/:emotion/random', (req, res) => {
  try {
    const emotion = req.params.emotion.toLowerCase();
    const messages = emotionMessages[emotion];
    
    if (!messages || messages.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Emoción no encontrada o sin mensajes disponibles',
        availableEmotions: Object.keys(emotionMessages)
      });
    }
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    res.json({
      success: true,
      data: randomMessage,
      emotion: emotion,
      message: `Mensaje aleatorio para ${emotion} obtenido exitosamente`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener mensaje aleatorio por emoción',
      error: error.message
    });
  }
});

// ============= ENDPOINT DE INFORMACIÓN DE LA API =============
// GET /api/info - Información general de la API
router.get('/info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: 'Ruleta Game API',
      version: '1.0.0',
      description: 'API REST para el juego de ruleta con contenido de bienestar mental',
      endpoints: {
        categories: '/api/categories',
        questions: '/api/questions',
        phrases: '/api/phrases',
        gameMessages: '/api/game-messages',
        emotionMessages: '/api/emotion-messages'
      },
      totalCategories: ruletaCategories.length,
      totalQuestions: questions.length,
      availableEmotions: Object.keys(motivationalPhrases),
      gameMessageTypes: Object.keys(gameMessages)
    },
    message: 'API funcionando correctamente'
  });
});

module.exports = router;
