# Práctica 3: Consumo API REST

## Objetivo de la Práctica
El objetivo de esta práctica es crear una página web que consuma una API REST pública y presente los datos obtenidos de manera interactiva. Para ello, se utilizarán llamadas asíncronas con JavaScript (JS) y manipulación del DOM para mostrar la información en la interfaz de usuario. En esta práctica, se ha utilizado la API [REST Countries](https://restcountries.com/#endpoints-full-name) para desarrollar un juego interactivo que permite al usuario adivinar la capital o la bandera de un país.

## Descripción del Proyecto
Se ha desarrollado una página web con dos juegos interactivos:
1. **Adivinar la Capital**: Se muestra un país y cuatro opciones de capitales. El usuario debe seleccionar la capital correcta.
2. **Adivinar la Bandera**: Se muestra un país y cuatro opciones de banderas. El usuario debe seleccionar la bandera correcta.

Ambos juegos siguen un mecanismo similar: se presenta una pregunta (país) y cuatro opciones, de las cuales solo una es correcta. El usuario gana puntos por cada respuesta correcta. Hay 10 preguntas por juego y al final aparece el resultado final

## API Utilizada
- **API REST Countries**: [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all)
  - Esta API proporciona información detallada sobre países, incluyendo nombres, capitales, banderas, regiones, y más. Se ha utilizado para obtener datos aleatorios de países y sus respectivas capitales y banderas.

## Funcionalidades Implementadas
1. **Llamadas Asíncronas**: Se utiliza `fetch` para realizar peticiones a la API y obtener datos de países.
2. **Manipulación del DOM**: Se actualiza dinámicamente la interfaz de usuario con los datos obtenidos de la API (nombres de países, capitales, banderas, etc.).
3. **Juegos Interactivos**:
   - **Adivinar la Capital**: Muestra un país y cuatro opciones de capitales.
   - **Adivinar la Bandera**: Muestra una bandera y cuatro opciones de países.
4. **Puntuación**: Se lleva un registro de las respuestas correctas del usuario.

## Estructura del Proyecto
- **index.html**: Contiene la estructura básica de la página web.
- **styles.css**: Define los estilos visuales de la página.
- **script.js**: Contiene la lógica para realizar las llamadas a la API, manipular el DOM y gestionar la interacción del usuario.

## Instrucciones de Uso
1. Abre el juego con el link proporcionada en el siguiente apartado.
2. Selecciona uno de los dos juegos: "Adivinar la Capital" o "Adivinar la Bandera".
3. Responde las preguntas seleccionando una de las cuatro opciones proporcionadas.
4. Observa tu puntuación al finalizar el juego.

## Requisitos
- Conexión a Internet para realizar las peticiones a la API.
- Navegador web moderno (recomendado: Chrome, Firefox, Edge).

## Link a la página del proyecto
[https://pedromaarcos.github.io/P3/](https://pedromaarcos.github.io/P3/)

## Autor
- Pedro Marcos Plaza
- 23/02/2025
