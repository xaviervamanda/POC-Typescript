import { validateSchema } from "@/middlewares/schemaValidation";
import { createPostSchema } from "@/schemas/posts.schemas";
import { Router } from "express";
import * as postsControllers from "@/controllers/posts.controllers";

const postsRouter = Router();

postsRouter.get ("/", postsControllers.getAllPosts)
postsRouter.post ("/post", validateSchema(createPostSchema), postsControllers.createPost);
postsRouter.put ("/edit/:id")
postsRouter.delete ("/delete/:id")

export default postsRouter;