# Simulador de Presupuesto Dinámico - Kariso Estética

Este proyecto es una aplicación web interactiva desarrollada para **Kariso Estética** que automatiza la cotización de servicios y optimiza la gestión de turnos comerciales. El sistema transforma una interfaz estática en una plataforma dinámica, escalable y centrada en la experiencia de usuario (UX).

## 🚀 Características del Proyecto
- **Clasificación Automática:** Los servicios se agrupan dinámicamente por categorías (Uñas, Pies, Bienestar, etc.) a partir de la información procesada desde el backend.
- **Cálculo en Tiempo Real:** El usuario puede seleccionar múltiples tratamientos y visualizar el presupuesto estimado de forma inmediata.
- **Persistencia de Datos:** Utiliza almacenamiento local para mantener la selección del usuario activa ante recargas de la página.
- **Integración con WhatsApp:** Conexión directa con la API de mensajería para enviar la orden detallada con un solo clic, sin perder tráfico dentro del sitio.

## 🛠️ Tecnologías Utilizadas
- **HTML5 & CSS3** (Estructura semántica y estilos personalizados)
- **Bootstrap 5** (Layout adaptativo y componentes responsivos)
- **JavaScript (ES6+)** (Lógica de programación, manipulación avanzada del DOM y eventos)
- **Formato JSON & Async/Await (Fetch API)** (Consumo y renderizado de datos asincrónicos desde un origen local)
- **SweetAlert2** (Librería externa para la gestión estética de ventanas emergentes y flujos de confirmación)

## 📁 Estructura del Repositorio
La arquitectura del proyecto aplica principios de modularización y separación de responsabilidades:
- `/pages/`: Contenedores de las secciones de navegación de la web.
- `/data/`: Almacenamiento del archivo de datos fuente (`servicios.json`).
- `/js/`: Archivos de lógica central (`main.js`) limpios de código muerto y comentarios de depuración.
- `/css/`: Hojas de estilos de diseño personalizado.

## 👥 Alumno
- **Nombre:** Facundo Fariña
- **Curso:** JavaScript
- **Comisión:** 89630