import {db} from "@/database/database.connection";
import {User, CreateUser} from "@/protocols";

export function registerUser (body: CreateUser) {
    return db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [body.name, body.email, body.password]);
}

export async function getUserByEmail (email: string) {
    const result = await db.query<User>("SELECT * FROM users WHERE email = $1", [email]);
    return result;
}