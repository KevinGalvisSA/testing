import { AccountRepository } from "../../domain/repositories/AccountRepository";
import bcrypt from "bcryptjs";
import { Account } from "../../domain/models/Account";

export async function createAccount(
    name: string,
    email: string,
    password: string,
    accountRepository: AccountRepository
) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const account = new Account();
    account.name = name
    account.email = email;
    account.password = hashedPassword;

    return await accountRepository.save(account);
}
