# Ruleta Game API

API REST completa para el juego de ruleta con contenido de bienestar mental. Expone categorías, preguntas, frases motivacionales y mensajes para ser consumidos desde Flutter.

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación
```bash
cd backend
npm install
```

### Ejecutar el servidor
```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## 📚 Endpoints de la API

### Información General
- `GET /` - Información de bienvenida
- `GET /api/info` - Información detallada de la API

### Categorías de Ruleta
- `GET /api/categories` - Obtener todas las categorías
- `GET /api/categories/:id` - Obtener categoría específica

### Preguntas
- `GET /api/questions` - Obtener todas las preguntas
- `GET /api/questions?categoryId=1` - Filtrar preguntas por categoría
- `GET /api/questions/:id` - Obtener pregunta específica
- `GET /api/questions/random` - Obtener pregunta aleatoria
- `GET /api/questions/random?categoryId=1` - Pregunta aleatoria por categoría

### Frases Motivacionales
- `GET /api/phrases` - Obtener todas las frases por emoción
- `GET /api/phrases/:emotion` - Frases por emoción específica
- `GET /api/phrases/:emotion/random` - Frase aleatoria por emoción

**Emociones disponibles:** alegria, tristeza, ansiedad, enojo, miedo

### Mensajes de Juego/Trivia
- `GET /api/game-messages` - Obtener todos los mensajes de juego
- `GET /api/game-messages/:type` - Mensajes por tipo específico
- `GET /api/game-messages/:type/random` - Mensaje aleatorio por tipo

**Tipos disponibles:** curiosamente, mente_en_pares, puzzle, sabias_que

### Mensajes por Emoción
- `GET /api/emotion-messages` - Obtener todos los mensajes por emoción
- `GET /api/emotion-messages/:emotion` - Mensajes por emoción específica
- `GET /api/emotion-messages/:emotion/random` - Mensaje aleatorio por emoción

**Emociones disponibles:** alegria, tristeza, ansiedad, enojo, miedo, estres

## 📱 Consumo desde Flutter

### Configuración en Flutter

1. Agregar dependencia HTTP en `pubspec.yaml`:
```yaml
dependencies:
  http: ^1.1.0
```

2. Ejemplo de servicio para consumir la API:

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class RuletaApiService {
  static const String baseUrl = 'http://localhost:3000/api';
  
  // Obtener categorías
  static Future<List<dynamic>> getCategories() async {
    final response = await http.get(Uri.parse('$baseUrl/categories'));
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data['data'];
    }
    throw Exception('Error al cargar categorías');
  }
  
  // Obtener pregunta aleatoria
  static Future<Map<String, dynamic>> getRandomQuestion({int? categoryId}) async {
    String url = '$baseUrl/questions/random';
    if (categoryId != null) {
      url += '?categoryId=$categoryId';
    }
    
    final response = await http.get(Uri.parse(url));
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data['data'];
    }
    throw Exception('Error al cargar pregunta');
  }
  
  // Obtener frase motivacional aleatoria
  static Future<String> getRandomPhrase(String emotion) async {
    final response = await http.get(
      Uri.parse('$baseUrl/phrases/$emotion/random')
    );
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data['data'];
    }
    throw Exception('Error al cargar frase');
  }
  
  // Obtener mensaje de juego aleatorio
  static Future<String> getRandomGameMessage(String type) async {
    final response = await http.get(
      Uri.parse('$baseUrl/game-messages/$type/random')
    );
    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      return data['data'];
    }
    throw Exception('Error al cargar mensaje');
  }
}
```

### Ejemplo de uso en Widget:

```dart
class RuletaWidget extends StatefulWidget {
  @override
  _RuletaWidgetState createState() => _RuletaWidgetState();
}

class _RuletaWidgetState extends State<RuletaWidget> {
  List<dynamic> categories = [];
  Map<String, dynamic>? currentQuestion;
  
  @override
  void initState() {
    super.initState();
    loadCategories();
  }
  
  Future<void> loadCategories() async {
    try {
      final cats = await RuletaApiService.getCategories();
      setState(() {
        categories = cats;
      });
    } catch (e) {
      print('Error: $e');
    }
  }
  
  Future<void> loadRandomQuestion() async {
    try {
      final question = await RuletaApiService.getRandomQuestion();
      setState(() {
        currentQuestion = question;
      });
    } catch (e) {
      print('Error: $e');
    }
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Ruleta Game')),
      body: Column(
        children: [
          // Mostrar categorías
          ...categories.map((cat) => ListTile(
            title: Text(cat['name']),
            subtitle: Text(cat['description']),
            leading: Text(cat['icon']),
          )),
          
          // Botón para cargar pregunta
          ElevatedButton(
            onPressed: loadRandomQuestion,
            child: Text('Obtener Pregunta Aleatoria'),
          ),
          
          // Mostrar pregunta actual
          if (currentQuestion != null)
            Card(
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  children: [
                    Text(currentQuestion!['question']),
                    ...currentQuestion!['options'].map<Widget>((option) => 
                      ListTile(title: Text(option))
                    ),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
```

## 🔧 Estructura del Proyecto

```
backend/
├── data/
│   └── models.js          # Modelos de datos
├── routes/
│   └── api.js            # Rutas de la API
├── server.js             # Servidor principal
├── package.json          # Dependencias
├── .env                  # Variables de entorno
└── README.md            # Documentación
```

## 📊 Datos Disponibles

### Categorías (5 categorías)
- Emociones
- Autoestima  
- Relaciones
- Mindfulness
- Creatividad

### Preguntas (6 preguntas con opciones múltiples)
Cada pregunta incluye:
- Pregunta
- 4 opciones de respuesta
- Respuesta correcta
- Explicación

### Frases Motivacionales
Por emoción: alegria, tristeza, ansiedad, enojo, miedo

### Mensajes de Juego
Tipos: curiosamente, mente_en_pares, puzzle, sabias_que

### Mensajes por Emoción
Emociones: alegria, tristeza, ansiedad, enojo, miedo, estres

## 🌐 CORS y Seguridad

La API está configurada para:
- Permitir peticiones desde cualquier origen (desarrollo)
- Usar Helmet para seguridad básica
- Logging de peticiones con Morgan
- Manejo de errores centralizado

## 🚀 Despliegue

Para producción, considera:
1. Configurar variables de entorno apropiadas
2. Usar un proceso manager como PM2
3. Configurar CORS específico para tu dominio
4. Implementar rate limiting
5. Agregar autenticación si es necesario

## 📝 Notas

- Todos los endpoints devuelven JSON con estructura consistente
- Manejo de errores con códigos HTTP apropiados
- Soporte para filtros y búsquedas aleatorias
- Documentación completa de endpoints disponible en `/api/info`
