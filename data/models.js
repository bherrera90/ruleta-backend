// Modelos de datos para la API de Ruleta

// Categorías de ruleta
const ruletaCategories = [
  {
    id: 1,
    name: "Mente Sana",
    description: "Categoría enfocada en el manejo y reconocimiento de emociones",
    color: "#FF6B6B",
    icon: "😊"
  },
  {
    id: 2,
    name: "Mitos Desmentidos",
    description: "Desmintiendo mitos sobre la salud mental",
    color: "#4ECDC4",
    icon: "🔍"
  },
  {
    id: 3,
    name: "Curiosamente",
    description: "Datos curiosos y fascinantes sobre la mente humana",
    color: "#45B7D1",
    icon: "🤔"
  },
  {
    id: 4,
    name: "Q+ve",
    description: "Preguntas positivas para el crecimiento personal",
    color: "#96CEB4",
    icon: "➕"
  },
  {
    id: 5,
    name: "Clave Mental",
    description: "Claves y estrategias para el bienestar mental",
    color: "#FFEAA7",
    icon: "🔑"
  }
];

// Importar las preguntas completas
const { completeQuestions } = require('./complete_questions');

// Usar las 30 preguntas completas
const questions = completeQuestions;

// Frases motivacionales por emoción
const motivationalPhrases = {
  alegria: [
    "La alegría es contagiosa, compártela con el mundo",
    "Cada sonrisa es una pequeña victoria",
    "La felicidad se encuentra en los pequeños momentos",
    "Tu alegría ilumina el camino de otros"
  ],
  tristeza: [
    "Es válido sentir tristeza, es parte de ser humano",
    "Después de la tormenta siempre sale el sol",
    "La tristeza también nos enseña y nos hace crecer",
    "Permítete sentir, pero no te quedes ahí para siempre"
  ],
  ansiedad: [
    "Respira profundo, este momento también pasará",
    "Eres más fuerte de lo que crees",
    "La ansiedad es temporal, tu fortaleza es permanente",
    "Un paso a la vez, puedes con esto"
  ],
  enojo: [
    "El enojo es una emoción válida, pero no definas tus acciones por él",
    "Pausa, respira y elige tu respuesta",
    "Tu paz mental vale más que tener la razón",
    "Transforma tu enojo en energía positiva"
  ],
  miedo: [
    "El coraje no es la ausencia de miedo, es actuar a pesar de él",
    "Cada vez que enfrentas tu miedo, creces un poco más",
    "El miedo es solo una emoción, no una realidad",
    "Eres capaz de más de lo que imaginas"
  ]
};

// Mensajes tipo trivia o juego
const gameMessages = {
  curiosamente: [
    "Curiosamente, reír durante 15 minutos quema las mismas calorías que caminar durante 30 minutos",
    "Curiosamente, el cerebro humano genera aproximadamente 12-25 watts de electricidad",
    "Curiosamente, sonreír puede mejorar tu estado de ánimo incluso si no te sientes feliz",
    "Curiosamente, el acto de escribir a mano mejora la memoria y el aprendizaje"
  ],
  menteEnPares: [
    "Mente en pares: Felicidad y Gratitud - ambas se refuerzan mutuamente",
    "Mente en pares: Respiración y Calma - una lleva a la otra naturalmente",
    "Mente en pares: Ejercicio y Bienestar mental - compañeros inseparables",
    "Mente en pares: Sueño y Concentración - uno no funciona sin el otro"
  ],
  puzzle: [
    "Puzzle mental: Si cambias una pequeña rutina diaria, ¿qué efecto dominó podría tener?",
    "Puzzle mental: ¿Cómo se conecta tu respiración con tu estado emocional?",
    "Puzzle mental: ¿Qué relación existe entre tus pensamientos y tus sensaciones físicas?",
    "Puzzle mental: ¿De qué manera influye tu postura corporal en tu confianza?"
  ],
  sabias_que: [
    "¿Sabías que? Abrazar durante 20 segundos libera oxitocina, la hormona del bienestar",
    "¿Sabías que? Meditar solo 10 minutos al día puede reducir significativamente el estrés",
    "¿Sabías que? Escribir sobre tus emociones puede mejorar tu salud mental y física",
    "¿Sabías que? Caminar en la naturaleza reduce la actividad en la región del cerebro asociada con la depresión"
  ]
};

// Mensajes por emoción específica
const emotionMessages = {
  alegria: [
    "¡Qué maravilloso verte tan radiante! La alegría se ve hermosa en ti",
    "Tu sonrisa puede cambiar el día de alguien más",
    "Celebra este momento de felicidad, te lo mereces",
    "La alegría que sientes ahora es un regalo que puedes compartir"
  ],
  tristeza: [
    "Es normal sentir tristeza, no tienes que fingir estar bien",
    "Tus lágrimas son válidas y necesarias para sanar",
    "La tristeza es temporal, pero tu fortaleza es permanente",
    "Permítete sentir, es parte del proceso de sanación"
  ],
  ansiedad: [
    "Respira conmigo: inhala por 4, mantén por 4, exhala por 6",
    "Este sentimiento pasará, como han pasado otros antes",
    "Estás seguro/a en este momento, aquí y ahora",
    "Tu ansiedad no define quién eres, eres mucho más que eso"
  ],
  enojo: [
    "Tu enojo es válido, pero no permitas que controle tus decisiones",
    "Pausa un momento antes de reaccionar, tienes el poder de elegir",
    "¿Qué necesitas realmente en este momento para sentirte mejor?",
    "El enojo puede ser energía para el cambio positivo"
  ],
  miedo: [
    "Es valiente reconocer que tienes miedo",
    "El miedo a menudo nos protege, pero no debe paralizarnos",
    "Puedes sentir miedo y aún así dar el siguiente paso",
    "Cada vez que enfrentas tu miedo, te vuelves más fuerte"
  ],
  estres: [
    "El estrés es una señal de que necesitas cuidarte más",
    "Toma un descanso, aunque sea de 5 minutos",
    "No tienes que resolver todo hoy, un paso a la vez",
    "Tu bienestar es más importante que cualquier tarea pendiente"
  ]
};

module.exports = {
  ruletaCategories,
  questions,
  motivationalPhrases,
  gameMessages,
  emotionMessages
};
