import { Router } from 'express';
import { generatePets, generateUsers } from '../utils/mocks.js';
import Pet from '../dao/models/Pet.js';
import User from '../dao/models/User.js';
import petsController from '../controllers/pets.controller.js';
import usersController from '../controllers/users.controller.js';
import { createHash } from '../utils/index.js';

const router = Router();

router.get("/mockingpets", petsController.getMockingPets);
router.post("/mockingpets", petsController.postMockingPets);
router.get("/pets", petsController.getAllPets);
router.get("/mockingusers", usersController.getMockingUsers);
router.post("/mockingusers", usersController.postMockingUsers);
router.get("/users", usersController.getAllUsers);

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
            const user = generateUsers();
            user.password = await createHash(user.password);
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