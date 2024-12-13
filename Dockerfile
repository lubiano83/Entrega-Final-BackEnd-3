# Usa una imagen base estable
FROM node:20-alpine

# Instala herramientas necesarias para compilar bcrypt
RUN apk add --no-cache python3 make g++

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias dentro del contenedor
RUN npm install

# Fuerza la recompilación de bcrypt para garantizar compatibilidad con el entorno
RUN npm rebuild bcrypt --build-from-source

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando para iniciar la aplicación
CMD ["npm", "start"]