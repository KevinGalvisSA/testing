import { AppDataSource } from "../../infrastructure/dataSource";
import { User } from "../../domain/models/User";

export async function createUser(name: string, email: string) {
    const userRepository = AppDataSource.getRepository(User);

    const user = new User();
    user.name = name;
    user.email = email;

    return await userRepository.save(user);
}
