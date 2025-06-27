import express from "express";
import { createAccount } from "../../application/usescases/CreateAccount";
import { loginAccount } from "../../application/usescases/LoginAccount";
import { AccountRepositoryImpl } from "../persistence/AccountRepositoryImpl";

const router = express.Router();
const accountRepository = new AccountRepositoryImpl();

// Registro de cuentas
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newAccount = await createAccount(name, email, password, accountRepository);
        res.status(201).json(newAccount);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await loginAccount(email, password, accountRepository);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
});

export default router;
