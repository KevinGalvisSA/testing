import { Account } from "../models/Account";

export interface AccountRepository {
    save(account: Account): Promise<Account>;
    findByPassword(password: string): Promise<Account | null>;
    findByEmail(email: string): Promise<Account | null>;
};
