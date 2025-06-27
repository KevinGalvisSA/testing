import express from "express";
import { createUser } from "../../application/usescases/CreateUser";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await createUser(name, email);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
});

export default router;
