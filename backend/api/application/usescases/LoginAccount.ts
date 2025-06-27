import { AccountRepository } from "../../domain/repositories/AccountRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function loginAccount(
    email: string,
    password: string,
    accountRepository: AccountRepository
) {
    const account = await accountRepository.findByEmail(email);
    if (!account) {
        throw new Error("Cuenta no encontrada");
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
        throw new Error("Contraseña incorrecta");
    }

    const token = jwt.sign(
        { accountId: account.id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    );

    return { token, accountId: account.id };
}
