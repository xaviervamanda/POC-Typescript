import { registerUser } from "@/controllers/users.controllers";
import { validateSchema } from "@/middlewares/schemaValidation";
import { createUserSchema } from "@/schemas/users.schemas";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/sign-up", validateSchema(createUserSchema), registerUser);

export default usersRouter;