import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../domain/models/User.ts";
import { Account } from "../domain/models/Account.ts";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "####"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Solo para desarrollo
    logging: true,
    entities: [User, Account],
    migrations: [],
    subscribers: [],
});

//postgres://camper:camper2023@localhost:5432/mypsqlbase
