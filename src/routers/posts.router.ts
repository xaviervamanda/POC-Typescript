import { Router } from "express";

const postsRouter = Router();

postsRouter.get ("/")
postsRouter.post ("/post")
postsRouter.put ("/edit")
postsRouter.delete ("/delete")

export default postsRouter;