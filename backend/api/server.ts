import express from "express";
import { AppDataSource } from "./infrastructure/dataSource";
import userRouter from "./infrastructure/controllers/Usercontroller";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRouter);

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(PORT, () => {
            console.log(`Servidor backend escuchando en puerto ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
