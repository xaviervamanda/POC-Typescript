import { validateSchema } from "@/middlewares/schemaValidation";
import { createPostSchema, updatePostSchema } from "@/schemas/posts.schemas";
import { Router } from "express";
import * as postsControllers from "@/controllers/posts.controllers";

const postsRouter = Router();

postsRouter.get ("/", postsControllers.getAllPosts)
postsRouter.post ("/post", validateSchema(createPostSchema), postsControllers.createPost);
postsRouter.put ("/edit/:id", validateSchema(updatePostSchema), postsControllers.updatePost);
postsRouter.delete ("/delete/:id", postsControllers.deletePost);

export default postsRouter;