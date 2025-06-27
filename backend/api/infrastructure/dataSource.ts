import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../domain/models/User.ts";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "Kevin",
    password: "testeando",
    database: "mypostbase",
    synchronize: true, // Solo para desarrollo
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
});
