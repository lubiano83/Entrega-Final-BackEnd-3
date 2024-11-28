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

## Scripts Disponibles

- `start`: Inicia la aplicación en modo producción.
- `dev`: Inicia la aplicación en modo desarrollo con `nodemon`.
- `test`: Ejecuta las pruebas definidas en `test/supertest.test.js` utilizando Mocha.

## Uso del Contenedor Docker

La imagen Docker del proyecto está disponible en Docker Hub y puede ser descargada directamente desde el siguiente enlace:

[Docker Hub: lubiano83/entrega-final](https://hub.docker.com/repository/docker/lubiano83/entrega-final/general)

### Comandos para Usar el Contenedor
1. **Descargar la imagen desde Docker Hub**:
   ```bash
   docker pull lubiano83/entregafinal:latest