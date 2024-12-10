# Plantilla Documentación

Este proyecto es una plantilla base para construir aplicaciones con Node.js y Express. Está configurada para soportar autenticación, encriptación, manejo de archivos, generación de datos ficticios y pruebas automatizadas. Además, incluye documentación interactiva para APIs utilizando Swagger.

## Dependencias del Proyecto

### **Dependencias de Producción**
- **@faker-js/faker**: Generador de datos ficticios, útil para pruebas y desarrollo.
- **bcrypt**: Librería para encriptar contraseñas de manera segura.
- **cookie-parser**: Middleware para analizar cookies en las solicitudes HTTP.
- **dotenv**: Manejo de variables de entorno desde un archivo `.env`.
- **express**: Framework web minimalista para construir APIs y aplicaciones web.
- **jsonwebtoken**: Implementación de JSON Web Tokens para autenticación basada en tokens.
- **mongoose**: ODM (Object Data Modeling) para interactuar con bases de datos MongoDB.
- **multer**: Middleware para manejar la carga de archivos en aplicaciones Express.
- **supertest**: Herramienta para pruebas HTTP, ideal para validar rutas en APIs.
- **swagger-jsdoc** y **swagger-ui-express**: Generación y presentación de documentación interactiva para APIs RESTful.

### **Dependencias de Desarrollo**
- **chai**: Biblioteca de aserciones para escribir pruebas unitarias.
- **mocha**: Framework para realizar pruebas automatizadas.
- **nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

## Estructura del Proyecto

El proyecto sigue una estructura modular, separando las funcionalidades principales en rutas y controladores. Las rutas disponibles incluyen:

- **Usuarios**: Registro, autenticación y gestión de usuarios.
- **Sesiones**: Manejo de inicio de sesión y validación de tokens.
- **Mascotas**: CRUD completo de mascotas, con soporte para carga de imágenes.
- **Adopciones**: Creación y consulta de adopciones.
- **Mocking**: Generación y obtención de datos ficticios.

## Documentación de la API

La documentación de la API está generada con **Swagger**. Para acceder a ella, inicia el servidor y visita:

Incluye ejemplos interactivos para probar las diferentes rutas y métodos de la API.

## Scripts Disponibles

- `start`: Inicia la aplicación en modo producción.
- `dev`: Inicia la aplicación en modo desarrollo con `nodemon`.
- `test`: Ejecuta las pruebas definidas en `test/supertest.test.js` utilizando Mocha.

## Uso del Contenedor Docker

El proyecto está disponible como una imagen Docker, lo que facilita su despliegue en cualquier entorno compatible con Docker.

### Imagen en Docker Hub

La imagen Docker del proyecto puede descargarse directamente desde Docker Hub:

[Docker Hub: lubiano83/entrega-final](https://hub.docker.com/repository/docker/lubiano83/entrega-final/general)

### Comandos para Usar el Contenedor

1. **Descargar la imagen desde Docker Hub**:
   ```bash
   docker pull lubiano83/entregafinal:latest