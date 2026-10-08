# Sistema Backend de Turnos y Reservas - Kariso Estética

Este proyecto es la solución backend definitiva que transforma una interfaz estática en una plataforma dinámica, escalable y centrada en la experiencia de usuario (UX) para **Kariso Estética**. Automatiza la cotización de servicios, la validación de datos de entrada y optimiza la gestión de turnos comerciales de forma persistente.

## 🛠️ Arquitectura del Proyecto

El sistema está desarrollado bajo una arquitectura de software organizada estrictamente en capas independientes, asegurando la separación de responsabilidades:

- **Routes:** Define los endpoints de la API y asocia los controladores junto con los middlewares de validación.
- **Controllers:** Maneja el ciclo de solicitud-respuesta HTTP de Express.
- **Middlewares:** Intercepta las solicitudes para ejecutar validaciones automáticas de datos de entrada antes de tocar la persistencia.
- **Validators (Zod):** Filtro de seguridad que valida los esquemas y tipos de datos de forma estricta.
- **Services:** Contiene la lógica de negocio pura, implementando filtros, ordenamientos y la paginación.
- **Repositories:** Actúa como un puente intermedio aislando por completo el origen de los datos de la lógica empresarial.
- **DAO (Data Access Object):** Capa encargada de realizar las consultas directas a la base de datos utilizando Mongoose.
- **Models:** Define los esquemas estructurales de las colecciones en MongoDB Atlas.

## 🚀 Características y Funcionalidades

- **CRUD Completo de Servicios:** Gestión absoluta de los tratamientos de estética.
- **Paginación y Filtros Avanzados:** `GET /api/services` cuenta con ordenamiento por precio y filtros por query params implementando Mongoose Paginate V2.
- **Persistencia de Reservas:** Los turnos se asocian a servicios reales guardando únicamente sus referencias con `ObjectId` y `quantity` (nunca el objeto completo).
- **Consultas con Populate:** Al consultar los turnos, el sistema resuelve dinámicamente los datos del servicio mediante `.populate()`.
- **Interacciones en Tiempo Real:** Integración con Socket.io para reflejar cambios inmediatos de disponibilidad o servicios en el cliente sin recargar la página.

## 🧰 Tecnologías Utilizadas

- **Node.js** (Sintaxis moderna de ES Modules mediante `import/export`)
- **Express** (Framework de servidor)
- **MongoDB Atlas & Mongoose** (Persistencia de datos y modelado de objetos)
- **Mongoose Paginate V2** (Paginación y consultas avanzadas)
- **Socket.io** (Tiempo real vía WebSockets)
- **Express Handlebars** (Motor de plantillas para renderizado de vistas)
- **Zod** (Validación robusta de esquemas de datos)
- **Dotenv** (Configuración segura mediante variables de entorno)

## 📁 Estructura del Repositorio
La arquitectura del backend aplica principios de modularización avanzada dentro del directorio `/src/`:
- `/src/config/`: Archivos de configuración de variables de entorno y conexión de base de datos (`config.js`, `db.js`).
- `/src/dao/`: Clases DAO para el aislamiento de consultas y esquemas de persistencia (`models/`).
- `/src/repositories/`: Capa intermedia que maneja la abstracción de datos.
- `/src/services/`: Lógica de negocio y procesamiento de datos.
- `/src/controllers/`: Controladores de peticiones de la API y vistas de la web.
- `/src/middlewares/`: Middleware para la captura y formateo de errores de Zod.
- `/src/validators/`: Definición de esquemas estrictos de validación.
- `/src/routes/`: Enrutadores de servicios, reservas y visualización de plantillas.
- `/src/views/`: Plantillas Handlebars (`home`, `realTimeServices`) para los paneles interactivos.

## 👥 Alumno
- **Nombre:** Facundo Fariña
- **Curso:** Backend
- **Comisión:** 95205
- **Repositorio del Proyecto:** https://github.com/FacuFa1503/Kariso-Estetica-Backend1
