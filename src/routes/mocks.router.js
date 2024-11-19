import { Router } from 'express';
import { generatePets, generateUsers } from '../utils/mocks.js';
import Pet from '../dao/models/Pet.js';
import User from '../dao/models/User.js';
import CustomError from "../services/errors/custom.error.js";
import generateInfoError from "../services/errors/info.js";
import Errors from "../services/errors/enums.js";

const router = Router();

router.get("/mockingpets", async (req, res) => {
    try {
        const pets = [];
        for (let i = 0; i < 100; i++) {
            const pet = generatePets();
            pets.push(pet);
        }

        const savedPets = await Pet.insertMany(pets);
        return res.status(201).json(savedPets);
    } catch (error) {
        console.error('Error saving pets:', error);
        return res.status(500).json({ error: 'Failed to save pets' });
    }
});

router.get("/mockingusers", async (req, res) => {
    try {
        const users = [];
        for (let i = 0; i < 50; i++) {
            const user = await generateUsers();
            users.push(user);
        }

        const savedUsers = await User.insertMany(users);
        return res.status(201).json(savedUsers);
    } catch (error) {
        console.error('Error saving users:', error);
        return res.status(500).json({ error: 'Failed to save users' });
    }
});

router.post("/mockingpets", async (req, res, next) => {
    const { name, specie } = req.body;
    try {
        if (!name || !specie) {
            throw CustomError.crearError({
                nombre: "Mascota nueva",
                causa: generateInfoError({ name, specie }),
                mensaje: "Error al intentar agregar una mascota",
                codigo: Errors.TIPO_INVALIDO
            });
        }

        const pet = new Pet({ name, specie });
        const savedPet = await pet.save();
        res.status(201).json({ message: "Mascota agregada exitosamente", pet: savedPet });
    } catch (error) {
        next(error);
    }
});

router.post("/mockingusers", async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        if (!first_name || !last_name || !email || !password) {
            throw CustomError.crearError({
                nombre: "Usuario nuevo",
                causa: generateInfoError({ first_name, last_name, email, password }),
                mensaje: "Error al intentar agregar un usuario",
                codigo: Errors.TIPO_INVALIDO
            });
        }

        const hashedPassword = await createHash(password);

        const user = new User({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });

        const savedUser = await user.save();
        res.status(201).json({ message: "Usuario agregado exitosamente", user: savedUser });
    } catch (error) {
        next(error);
    }
});

router.get("/pets", async (req, res) => {
    try {
        const pets = await Pet.find();
        return res.status(201).json(pets);
    } catch (error) {
        console.error('Error saving pets:', error);
        return res.status(500).json({ error: 'Failed to save pets' });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        return res.status(201).json(users);
    } catch (error) {
        console.error('Error saving users:', error);
        return res.status(500).json({ error: 'Failed to save users' });
    }
});

router.post("/generateData", async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.query;

        const petsList = [];
        for (let i = 0; i < Number(pets); i++) {
            const pet = generatePets();
            petsList.push(pet);
        }

        const savedPets = await Pet.insertMany(petsList);
        console.log(`${petsList.length} pets generated and saved.`);

        const usersList = [];
        for (let i = 0; i < Number(users); i++) {
            const user = await generateUsers();
            usersList.push(user);
        }

        const savedUsers = await User.insertMany(usersList);
        console.log(`${usersList.length} users generated and saved.`);

        return res.status(201).json({
            message: "Data generated successfully",
            generated: {
                users: savedUsers.length,
                pets: savedPets.length,
            },
        });
    } catch (error) {
        console.error("Error generating data:", error);
        return res.status(500).json({ error: "Failed to generate data" });
    }
});


export default router;