import Joi from "joi";
import { CreatePost } from "@/protocols";

export const createPostSchema = Joi.object<CreatePost>({
    description: Joi.string().required(),
    url: Joi.string(),
    userId: Joi.number().required()
})

export const updatePostSchema = Joi.object({
    description: Joi.string().required(),
    url: Joi.string()
})