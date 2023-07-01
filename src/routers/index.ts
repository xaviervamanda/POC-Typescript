import { Router } from "express";
import postsRouter from "@/routers/posts.router";
import usersRouter from "@/routers/users.router";

const router = Router();

router.use("/posts", postsRouter);
router.use("/users", usersRouter);

export default router;