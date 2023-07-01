import { Router } from "express";
import postsRouter from "@/routers/posts.router";

const router = Router();

router.use(postsRouter);

export default router;