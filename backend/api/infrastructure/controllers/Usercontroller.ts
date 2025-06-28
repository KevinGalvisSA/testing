import express from "express";
import { createUser } from "../../application/usescases/CreateUser";
import { getAllUsers } from "../../application/usescases/getAllUsers";
import { UserRepositoryImpl } from "../persistence/UserRepositoryImpl";
import { authenticateToken } from "./middleware/authmiddleware";


const router = express.Router();
const userRepository = new UserRepositoryImpl();


router.get("/", authenticateToken, async (req, res) => {
    try {
        const users = await getAllUsers(userRepository);
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

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
