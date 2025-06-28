import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/models/User";

export async function getAllUsers(userRepository: UserRepository): Promise<User[]> {
    return await userRepository.findAll();
}
