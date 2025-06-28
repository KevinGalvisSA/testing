import { User } from "../../domain/models/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { AppDataSource } from "../dataSource";

export class UserRepositoryImpl implements UserRepository {
    private ormRepo = AppDataSource.getRepository(User);

    async save(user: User): Promise<User> {
        return this.ormRepo.save(user);
    }

    async findAll(): Promise<User[]> {
    return await this.ormRepo.find();
}

}
