import { User } from "../models/User";

export interface UserRepository {
    save(user: User): Promise<User>;
}
