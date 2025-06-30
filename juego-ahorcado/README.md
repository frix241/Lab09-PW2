# 🎮 Juego del Ahorcado - Angular

Un divertido y educativo juego del ahorcado desarrollado con **Angular** que incluye palabras relacionadas con programación y tecnología.

## 📋 Descripción

Este proyecto implementa el clásico juego del ahorcado con una interfaz moderna y atractiva. Los jugadores deben adivinar palabras relacionadas con programación, desarrollo web y tecnología antes de que se complete el dibujo del ahorcado.

## ✨ Características

- 🎯 **20 palabras** relacionadas con programación y tecnología
- 🎨 **Interfaz moderna** con diseño responsive
- 🖼️ **Dibujo del ahorcado** que se actualiza en tiempo real
- 📊 **Pantalla de resultados** con datos curiosos sobre cada palabra
- 🔄 **Navegación fluida** entre diferentes secciones
- 📱 **Compatible con dispositivos móviles**
- 🎵 **Animaciones** y efectos visuales atractivos

## 🛠️ Tecnologías Utilizadas

- **Angular 20.0.4** - Framework principal
- **TypeScript** - Lenguaje de programación
- **CSS3** - Estilos y animaciones
- **HTML5** - Estructura de la aplicación
- **Angular Router** - Navegación entre componentes
- **Angular Forms** - Manejo de formularios

## 📦 Instalación

### Prerequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** (viene con Node.js)
- **Angular CLI** (versión 20 o superior)

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd juego-ahorcado
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar la aplicación**
```bash
ng serve
```

4. **Abrir en el navegador**
Navega a `http://localhost:4200/`

## 🎮 Cómo Jugar

1. **Inicio**: Haz clic en "🚀 Comenzar Juego" en la pantalla principal
2. **Juego**: 
   - Ingresa una letra en el campo de texto
   - Presiona "Adivinar" o la tecla Enter
   - Tienes máximo 6 errores antes de perder
3. **Resultado**: Verás tu puntuación y datos curiosos sobre la palabra

## 📁 Estructura del Proyecto

```
src/app/
├── home/              # Componente de página principal
│   ├── home.ts
│   ├── home.html
│   └── home.css
├── game/              # Componente del juego
│   ├── game.ts
│   ├── game.html
│   └── game.css
├── results/           # Componente de resultados
│   ├── results.ts
│   ├── results.html
│   └── results.css
├── services/          # Servicios de la aplicación
│   └── hangman.ts     # Lógica del juego
├── app.routes.ts      # Configuración de rutas
├── app.config.ts      # Configuración de la app
├── app.html           # Template principal
└── app.ts             # Componente principal
```

## 🧠 Palabras del Juego

El juego incluye 20 palabras relacionadas con:
- **Frameworks**: Angular, Bootstrap
- **Lenguajes**: JavaScript, TypeScript
- **Conceptos**: Programación, Desarrollo, Frontend, Backend
- **Tecnologías**: Responsive, Framework, Algoritmo, Variable
- Y muchas más...

## 🚀 Comandos Útiles

### Servidor de desarrollo
```bash
ng serve
```

### Compilar para producción
```bash
ng build
```

### Ejecutar pruebas
```bash
ng test
```

### Generar nuevos componentes
```bash
ng generate component nombre-componente
```

## 👥 Trabajo en Equipo

Este proyecto está configurado para trabajo colaborativo:

1. **Clonar** el repositorio
2. **Crear una rama** para tu feature: `git checkout -b feature/nueva-caracteristica`
3. **Hacer commits** descriptivos: `git commit -m "Agregar nueva funcionalidad"`
4. **Push** a tu rama: `git push origin feature/nueva-caracteristica`
5. **Crear Pull Request** para revisar cambios

## 📝 Posibles Mejoras Futuras

- [ ] Sistema de puntuación
- [ ] Diferentes niveles de dificultad
- [ ] Más categorías de palabras
- [ ] Sonidos y efectos de audio
- [ ] Modo multijugador
- [ ] Guardar estadísticas del jugador
- [ ] Pistas para las palabras

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de uso educativo para el curso de Programación Web 2.

## 👨‍💻 Autores

- **[Nombre del Equipo]** - *Desarrollo inicial* - [GitHub del equipo]
- **[Integrante 1]** - *Frontend y diseño*
- **[Integrante 2]** - *Lógica del juego*
- **[Integrante 3]** - *Testing y documentación*

## 🙏 Agradecimientos

- Al profesor por la guía en el desarrollo
- A la comunidad de Angular por la documentación
- A los compañeros de clase por el feedback

---
⭐ **¡No olvides dar una estrella al proyecto si te gustó!** ⭐
