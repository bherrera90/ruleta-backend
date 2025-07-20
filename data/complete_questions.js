// Base de datos completa de preguntas para la Ruleta Game
// 30 preguntas organizadas por categorías

const completeQuestions = [
  // MENTE SANA (IDs 1-6)
  {
    id: 1,
    categoryId: 1,
    question: "¿Cuál de estas acciones crees que ayuda más a mantener una buena salud mental?",
    options: [
      "Pasar mucho tiempo solo/a en casa.",
      "Evitar hablar de tus sentimientos con otras personas.",
      "Mantener una alimentación equilibrada y hacer ejercicio regularmente.",
      "Dormir muy pocas horas al día."
    ],
    correctAnswer: 2,
    explanation: "Mantener una alimentación equilibrada y hacer ejercicio regularmente son fundamentales para la salud mental."
  },
  {
    id: 2,
    categoryId: 1,
    question: "¿Cuál de estas actividades fomenta la conexión social, beneficiando la salud mental?",
    options: [
      "Participar en un club o grupo con intereses comunes.",
      "Revisar por horas las redes sociales.",
      "Ver televisión solo/a durante horas.",
      "Evitar las reuniones familiares o con amigos/as."
    ],
    correctAnswer: 0,
    explanation: "Participar en grupos con intereses comunes fomenta la conexión social y beneficia la salud mental."
  },
  {
    id: 3,
    categoryId: 1,
    question: "¿Cuál es un buen hábito para reducir el estrés en tu día a día?",
    options: [
      "Revisar las redes sociales justo antes de dormir.",
      "Practicar alguna técnica de relajación como la respiración profunda.",
      "Saltarse comidas cuando estás ocupado/a.",
      "Aislarte cuando te sientes abrumado/a."
    ],
    correctAnswer: 1,
    explanation: "Practicar técnicas de relajación como la respiración profunda es efectivo para reducir el estrés."
  },
  {
    id: 4,
    categoryId: 1,
    question: "¿Cuál de los siguientes es un efecto común de no dormir lo suficiente?",
    options: [
      "Aumento de la concentración y memoria.",
      "Mayor energía durante el día.",
      "Problemas para concentrarse y falta de memoria.",
      "Mejora del estado de ánimo."
    ],
    correctAnswer: 2,
    explanation: "La falta de sueño afecta directamente la concentración y la memoria."
  },
  {
    id: 5,
    categoryId: 1,
    question: "¿Qué significa ser 'resiliente' en términos de salud mental?",
    options: [
      "No sentir nunca emociones negativas.",
      "Tener la capacidad de enfrentarse a situaciones difíciles, adaptarse con flexibilidad y salir fortalecido de ellas.",
      "Evitar cualquier tipo de estrés.",
      "Ser siempre positivo/a, sin importar qué pase."
    ],
    correctAnswer: 1,
    explanation: "La resiliencia es la capacidad de adaptarse y recuperarse de las adversidades, saliendo fortalecido."
  },
  {
    id: 6,
    categoryId: 1,
    question: "¿Cuál es un ejemplo de una creencia limitante que puede afectar la salud mental?",
    options: [
      "Soy capaz de aprender cosas nuevas si me esfuerzo.",
      "Merezco ser tratado/a con respeto.",
      "No soy lo suficientemente bueno/a para lograr mis metas.",
      "Está bien pedir ayuda cuando la necesito."
    ],
    correctAnswer: 2,
    explanation: "Las creencias limitantes como 'no soy lo suficientemente bueno/a' afectan negativamente la salud mental."
  },

  // MITOS DESMENTIDOS (IDs 7-12)
  {
    id: 7,
    categoryId: 2,
    question: "¿Cuál de las siguientes afirmaciones sobre la salud mental es un mito?",
    options: [
      "Buscar ayuda psicológica es un signo de fortaleza.",
      "Los problemas de salud mental son reales y afectan a muchas personas.",
      "Las personas con problemas de salud mental son peligrosas.",
      "Hablar sobre tus sentimientos puede ayudarte a sentirte mejor."
    ],
    correctAnswer: 2,
    explanation: "Es un mito que las personas con problemas de salud mental sean peligrosas. La mayoría no representa ningún riesgo."
  },
  {
    id: 8,
    categoryId: 2,
    question: "¿Cuál es uno de los principales beneficios de la terapia psicológica?",
    options: [
      "Resolver todos los problemas sin esfuerzo.",
      "Aprender a manejar mejor las emociones y el estrés.",
      "Hacer amistades nuevas automáticamente.",
      "Evitar cualquier tipo de problema en la vida."
    ],
    correctAnswer: 1,
    explanation: "La terapia psicológica ayuda a desarrollar herramientas para manejar mejor las emociones y el estrés."
  },
  {
    id: 9,
    categoryId: 2,
    question: "¿Es cierto que los problemas de salud mental solo afectan a los/las adultos/as?",
    options: [
      "Sí, los niños, niñas y adolescentes no experimentan estas dificultades.",
      "Solo afectan a las personas mayores que están solas.",
      "Depende mucho del nivel socioeconómico de la persona.",
      "No, los problemas de salud mental pueden darse en cualquier etapa de la vida."
    ],
    correctAnswer: 3,
    explanation: "Los problemas de salud mental pueden afectar a personas de cualquier edad, incluyendo niños y adolescentes."
  },
  {
    id: 10,
    categoryId: 2,
    question: "¿Es cierto que hablar de suicidio puede plantar la idea en la cabeza de alguien?",
    options: [
      "Sí, es mejor evitar el tema por completo.",
      "No, hablar abiertamente puede brindar alivio y permitir buscar ayuda.",
      "Solo si la persona ya está pensando en ello.",
      "Se debe hablar solo con un/una profesional de la salud."
    ],
    correctAnswer: 1,
    explanation: "Hablar abiertamente sobre el suicidio no planta la idea, sino que puede brindar alivio y ayuda."
  },
  {
    id: 11,
    categoryId: 2,
    question: "¿Cuál de estas opciones son válidas para buscar ayuda en salud mental?",
    options: [
      "Preguntarle consejos a un amigo/a que no es profesional de la salud.",
      "Buscar información en foros en línea sin verificar la fuente.",
      "Contactar a un/una profesional de salud mental o línea de ayuda especializada.",
      "Ignorar el problema con la esperanza de que desaparezca solo."
    ],
    correctAnswer: 2,
    explanation: "La opción más válida es contactar a profesionales de salud mental o líneas de ayuda especializadas."
  },
  {
    id: 12,
    categoryId: 2,
    question: "¿Cuál de estas creencias sobre los medicamentos psiquiátricos es incorrecta?",
    options: [
      "Pueden ser una herramienta útil para algunas personas.",
      "Alteran tu personalidad definitivamente.",
      "Deben ser recetados y supervisados por un/una profesional de la salud.",
      "No son la única forma de tratamiento para la salud mental."
    ],
    correctAnswer: 1,
    explanation: "Es incorrecto que los medicamentos psiquiátricos alteren la personalidad definitivamente."
  },

  // CURIOSAMENTE MENTAL (IDs 13-18)
  {
    id: 13,
    categoryId: 3,
    question: "¿Qué porcentaje aproximado de la población mundial crees que pueda tener algún problema de salud mental en su vida?",
    options: [
      "Alrededor del 10%.",
      "Alrededor del 25%.",
      "Alrededor del 50%.",
      "Alrededor del 75%."
    ],
    correctAnswer: 1,
    explanation: "Aproximadamente el 25% de la población mundial puede experimentar algún problema de salud mental en su vida."
  },
  {
    id: 14,
    categoryId: 3,
    question: "¿Cómo sabes dónde está tu mano si tienes los ojos cerrados?",
    options: [
      "Tus ojos te lo dicen, aunque estén cerrados.",
      "Tu cerebro tiene un 'mapa' de tu cuerpo y siente su posición.",
      "El aire te indica dónde está.",
      "Siempre sabes dónde están las partes de tu cuerpo."
    ],
    correctAnswer: 1,
    explanation: "El cerebro tiene un mapa corporal interno llamado propiocepción que nos permite saber la posición de nuestro cuerpo."
  },
  {
    id: 15,
    categoryId: 3,
    question: "¿Por qué una película de miedo te da escalofríos, aunque sepas que no es real lo que estás viendo?",
    options: [
      "Te asustas fácilmente.",
      "Quieres sentir un poco de emoción.",
      "La música de la película te pone nervioso/a.",
      "Tu cerebro reacciona a las imágenes como si fueran una amenaza real."
    ],
    correctAnswer: 3,
    explanation: "El cerebro procesa las imágenes de miedo como amenazas reales, activando respuestas emocionales automáticas."
  },
  {
    id: 16,
    categoryId: 3,
    question: "Cuando se siente ansiedad, el cerebro puede activar la respuesta de 'lucha o huida', preparándose para un peligro. ¿Qué cambios físicos automáticos ocurren en el cuerpo durante esta respuesta?",
    options: [
      "Aumenta el ritmo del corazón, la respiración se acelera y los músculos se tensan.",
      "Disminuye el ritmo cardíaco y la respiración se hace más lenta.",
      "La digestión se acelera y sientes más hambre.",
      "La temperatura corporal baja y sientes escalofríos."
    ],
    correctAnswer: 0,
    explanation: "La respuesta de lucha o huida acelera el ritmo cardíaco, la respiración y tensa los músculos para preparar el cuerpo."
  },
  {
    id: 17,
    categoryId: 3,
    question: "¿Por qué una película de miedo te da escalofríos, aunque sepas que no es real lo que estás viendo?",
    options: [
      "Te asustas fácilmente.",
      "Quieres sentir un poco de emoción.",
      "La música de la película te pone nervioso/a.",
      "Tu cerebro reacciona a las imágenes como si fueran una amenaza real."
    ],
    correctAnswer: 3,
    explanation: "El cerebro procesa las imágenes de miedo como amenazas reales, activando respuestas emocionales automáticas."
  },
  {
    id: 18,
    categoryId: 3,
    question: "Cuando se siente ansiedad, el cerebro puede activar la respuesta de 'lucha o huida', preparándose para un peligro. ¿Qué cambios físicos automáticos ocurren en el cuerpo durante esta respuesta?",
    options: [
      "Aumenta el ritmo cardíaco, la respiración se acelera y los músculos se tensan.",
      "Disminuye el ritmo cardíaco y la respiración se hace más lenta.",
      "La digestión se acelera y sientes más hambre.",
      "La temperatura corporal baja y sientes escalofríos."
    ],
    correctAnswer: 0,
    explanation: "La respuesta de lucha o huida acelera el ritmo cardíaco, la respiración y tensa los músculos para preparar el cuerpo."
  },

  // Q+VE (IDs 19-24)
  {
    id: 19,
    categoryId: 4,
    question: "¿Cuál de estos personajes es quiteño/a?",
    options: [
      "Oswaldo Guayasamín.",
      "Tránsito Amaguaña.",
      "Julio Jaramillo.",
      "Medardo Ángel Silva."
    ],
    correctAnswer: 0,
    explanation: "Oswaldo Guayasamín fue un reconocido pintor y escultor quiteño."
  },
  {
    id: 20,
    categoryId: 4,
    question: "¿Cuál es el nombre de la virgen de El Panecillo?",
    options: [
      "Virgen de Laura.",
      "Virgen del Consuelo.",
      "Virgen de Legarda.",
      "Virgen de la Aurora."
    ],
    correctAnswer: 2,
    explanation: "La Virgen del Panecillo es conocida como la Virgen de Legarda, en honor al escultor Bernardo de Legarda."
  },
  {
    id: 21,
    categoryId: 4,
    question: "¿En qué barrio de Quito se venden las tradicionales quesadillas?",
    options: [
      "San Juan.",
      "San Roque.",
      "Turubamba.",
      "La Tola."
    ],
    correctAnswer: 1,
    explanation: "Las tradicionales quesadillas quiteñas se venden en el barrio de San Roque."
  },
  {
    id: 22,
    categoryId: 4,
    question: "¿Cómo empieza el himno a Quito?",
    options: [
      "Saludemos gozosos en armoniosos cánticos esta aurora gloriosa.",
      "Nuestros pechos en férvido grito, te saludan ciudad inmortal.",
      "Siempre unidos, siempre unidos por Pichincha, por nuestro Ecuador.",
      "Saludemos el nombre bendito de la Patria en cantar soberano."
    ],
    correctAnswer: 1,
    explanation: "El himno a Quito comienza con 'Nuestros pechos en férvido grito, te saludan ciudad inmortal'."
  },
  {
    id: 23,
    categoryId: 4,
    question: "¿Por qué frase es conocido el Padre Almeida?",
    options: [
      "Ya regreso, Señor.",
      "Perdona, Señor.",
      "Si, Señor.",
      "Hasta la vuelta, Señor."
    ],
    correctAnswer: 3,
    explanation: "El Padre Almeida es conocido por la frase 'Hasta la vuelta, Señor'."
  },
  {
    id: 24,
    categoryId: 4,
    question: "¿Cómo se conoce a Quito?",
    options: [
      "La Sultana de los Andes.",
      "Luz de América.",
      "La Ciudad Blanca.",
      "La Ciudad de los Volcanes."
    ],
    correctAnswer: 1,
    explanation: "Quito es conocida como 'Luz de América'."
  },

  // CLAVE MENTAL (IDs 25-30)
  {
    id: 25,
    categoryId: 5,
    question: "¿Cuál de los siguientes es un factor de riesgo para salud mental?",
    options: [
      "Tener una red de apoyo social sólida.",
      "Desarrollar habilidades de afrontamiento saludables.",
      "Experimentar estrés por mucho tiempo.",
      "Participar en actividades deportivas."
    ],
    correctAnswer: 2,
    explanation: "Experimentar estrés prolongado es un factor de riesgo significativo para la salud mental."
  },
  {
    id: 26,
    categoryId: 5,
    question: "¿Cómo puede una red de apoyo sólida influir en tu salud mental?",
    options: [
      "Ayudándote a afrontar mejor los momentos difíciles.",
      "Haciéndote inmune al estrés.",
      "Resolviendo todos tus problemas.",
      "Asegurando que siempre tengas a alguien que te diga qué hacer."
    ],
    correctAnswer: 0,
    explanation: "Una red de apoyo sólida ayuda a afrontar mejor los momentos difíciles y proporciona recursos emocionales."
  },
  {
    id: 27,
    categoryId: 5,
    question: "¿Qué se ha demostrado que mejora el estado de ánimo y reduce la ansiedad y la depresión?",
    options: [
      "Pasar muchas horas viendo televisión.",
      "Evitar toda actividad física para conservar energía.",
      "La actividad física regular.",
      "Aislarse para tener tiempo para pensar."
    ],
    correctAnswer: 2,
    explanation: "La actividad física regular ha demostrado científicamente mejorar el estado de ánimo y reducir ansiedad y depresión."
  },
  {
    id: 28,
    categoryId: 5,
    question: "¿Qué podría desencadenar un problema de salud mental?",
    options: [
      "Consumo de alcohol y drogas.",
      "Situaciones de exclusión social.",
      "Una vida familiar disfuncional.",
      "Todas las anteriores."
    ],
    correctAnswer: 3,
    explanation: "Todos los factores mencionados pueden desencadenar problemas de salud mental."
  },
  {
    id: 29,
    categoryId: 5,
    question: "¿Qué tipo de adicción incorporó recientemente a la clasificación de enfermedades de la Organización Mundial de la Salud (OMS)?",
    options: [
      "Videojuegos.",
      "Compras en línea.",
      "Redes sociales.",
      "Ninguna de las anteriores."
    ],
    correctAnswer: 0,
    explanation: "La OMS incorporó recientemente la adicción a los videojuegos como trastorno en su clasificación de enfermedades."
  },
  {
    id: 30,
    categoryId: 5,
    question: "¿Qué efectos secundarios puede tener el consumo problemático de alcohol?",
    options: [
      "Mejora el rendimiento académico y deportivo.",
      "Aumenta el riesgo de accidentes, problemas de salud mental y adicción.",
      "Solo causa sueño y algo de resaca al día siguiente.",
      "Hace que las personas sean más inteligentes y seguras."
    ],
    correctAnswer: 1,
    explanation: "El consumo problemático de alcohol aumenta significativamente el riesgo de accidentes, problemas de salud mental y adicción."
  }
];

module.exports = { completeQuestions };
