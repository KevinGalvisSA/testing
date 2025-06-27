import express from "express";
import { createUser } from "../../application/usescases/CreateUser";
import { UserRepositoryImpl } from "../persistence/UserRepositoryImpl";

const router = express.Router();
const userRepository = new UserRepositoryImpl();

router.post("/", async (req, res) => {
    const { name, email } = req.body;

    try {
        const user = await createUser(name, email, userRepository);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creando el usuario" });
    }
});

export default router;
