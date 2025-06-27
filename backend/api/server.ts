import express from "express";
import { AppDataSource } from "./infrastructure/dataSource";
import userRouter from "./infrastructure/controllers/Usercontroller";
import authRouter from "./infrastructure/controllers/Authcontroller";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRouter);
app.use("/auth", authRouter);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized ✅");
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en puerto ${PORT} 🚀`);
        });
    })
    .catch((err) => {
        console.error("Error al inicializar la base de datos:", err);
    });
