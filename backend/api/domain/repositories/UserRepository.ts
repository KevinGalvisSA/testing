import { User } from "../models/User";

export interface UserRepository {
    save(user: User): Promise<User>;
    findAll(): Promise<User[]>;
}
