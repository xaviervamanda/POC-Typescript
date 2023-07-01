import * as usersServices from "@/repositories/users.repositories";
import { CreateUser } from "@/protocols";
import { conflictError } from "@/errors/conflictError";
export async function registerUser (body: CreateUser){

    const user = await usersServices.getUserByEmail(body.email);

    if (user.rowCount !== 0){
        throw conflictError(body.email);
    }

    await usersServices.registerUser(body);

    const result = await usersServices.getUserByEmail(body.email);

    return result.rows[0];
}

