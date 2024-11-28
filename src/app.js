import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from "./routes/mocks.router.js";
import manejadorError from "./middleware/error.middleware.js";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from "swagger-ui-express";

// Variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const HOST = "localhost";
const connection = mongoose.connect(process.env.MONGO_URL);

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Documentacion de la App Adoptame",
            description: "App dedicada a encontrar familias para los perritos o jirafas de la calle"
        }
    },
    apis: ["./src/docs/**/*.yaml"] // Esto lee todos las carpetas y sus archivos .yaml dentro de docs.
}

const specs = swaggerJSDoc(swaggerOptions);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Rutas
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use("/api/mocks", mocksRouter);
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

// Manejador de error va abajo de las rutas
app.use(manejadorError);

// Escuchando al servidor
app.listen(PORT,() => console.log(`Listening on http://${HOST}:${PORT}`));