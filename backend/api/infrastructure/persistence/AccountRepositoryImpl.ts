import { Account } from "../../domain/models/Account";
import { AccountRepository } from "../../domain/repositories/AccountRepository";
import { AppDataSource } from "../dataSource";

export class AccountRepositoryImpl implements AccountRepository {
    private ormRepo = AppDataSource.getRepository(Account);

    async save(account: Account): Promise<Account> {
        return this.ormRepo.save(account);
    }

    async findByPassword(password: string): Promise<Account | null> {
        return await this.ormRepo.findOneBy({ password });
    }

    async findByEmail(email: string): Promise<Account | null> {
        return await this.ormRepo.findOneBy({ email });
    }
}
