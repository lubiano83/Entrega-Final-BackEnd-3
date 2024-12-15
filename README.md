# Plantilla Base Node.js y Express

Este proyecto es una plantilla base para construir aplicaciones con Node.js y Express. Incluye funcionalidades para autenticación, encriptación, manejo de archivos, generación de datos ficticios y pruebas automatizadas. Además, provee documentación interactiva para APIs utilizando Swagger.

---

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

---

## Estructura del Proyecto

El proyecto sigue una estructura modular, separando las funcionalidades principales en rutas y controladores. Las rutas disponibles incluyen:

### Rutas de la API

#### **Usuarios** (`/api/users`)
- **GET `/`**: Obtiene todos los usuarios registrados.
- **POST `/`**: Crea un nuevo usuario.
- **GET `/:uid`**: Obtiene información de un usuario específico por ID.
- **PUT `/:uid`**: Actualiza la información de un usuario.
- **DELETE `/:uid`**: Elimina un usuario por ID.

#### **Mascotas** (`/api/pets`)
- **GET `/`**: Obtiene todas las mascotas registradas.
- **POST `/`**: Crea una nueva mascota.
- **POST `/withimage`**: Crea una mascota con una imagen cargada (requiere el campo `image` en el formulario).
- **PUT `/:pid`**: Actualiza la información de una mascota por ID.
- **DELETE `/:pid`**: Elimina una mascota por ID.

---

## Documentación de la API

La documentación de la API está generada con **Swagger**. Para acceder a ella:
1. Inicia el servidor local.
2. Accede a la ruta [http://localhost:55000/api-docs](http://localhost:55000/api-docs) en tu navegador.

Incluye ejemplos interactivos para probar las diferentes rutas y métodos de la API.

---

## Scripts Disponibles

- **`start`**: Inicia la aplicación en modo producción.
- **`dev`**: Inicia la aplicación en modo desarrollo con `nodemon`.
- **`test`**: Ejecuta las pruebas definidas en `test/supertest.test.js` utilizando Mocha.

---

## Uso del Contenedor Docker

El proyecto está disponible como una imagen Docker, lo que facilita su despliegue en cualquier entorno compatible con Docker.

### Imagen en Docker Hub

La imagen Docker del proyecto puede descargarse directamente desde Docker Hub:
[Docker Hub: lubiano83/entrega-final](https://hub.docker.com/repository/docker/lubiano83/entrega-final/general)

### Comandos para Usar el Contenedor

1. **Descargar la imagen desde Docker Hub**:
   ```bash
   docker pull lubiano83/entregafinal:latest
   ```
2. **Ejecutar el contenedor**:
   ```bash
   docker run -p 55000:55000 lubiano83/entregafinal:latest
   ```

---