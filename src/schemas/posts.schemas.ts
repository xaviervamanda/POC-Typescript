import Joi from "joi";
import { Post, CreatePost } from "@/protocols";

export const createPostSchema = Joi.object<CreatePost>({
    description: Joi.string().required(),
    url: Joi.string(),
    userId: Joi.number().required()
})