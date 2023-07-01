import Joi from "joi";
import { CreateUser } from "@/protocols";

export const createUserSchema = Joi.object<CreateUser>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})