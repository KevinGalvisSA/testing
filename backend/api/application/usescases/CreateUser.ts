import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export async function createUser(
    name: string,
    email: string,
    userRepository: UserRepository
) {
    const user = new User();
    user.name = name;
    user.email = email;
    return await userRepository.save(user);
}
