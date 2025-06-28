import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const authenticateToken: RequestHandler = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        res.status(401).json({ error: "Token no proporcionado" });
        return;
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        res.status(500).json({ error: "JWT_SECRET no definido en el entorno" });
        return;
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            res.status(403).json({ error: "Token inválido o expirado" });
            return;
        }
        (req as any).user = decoded;
        next();
    });
};
