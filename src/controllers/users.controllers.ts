import httpStatus from "http-status";
import { Request, Response } from "express";
import { CreateUser } from "@/protocols";
import * as usersServices from "@/services/users.services";
export async function registerUser (req: Request, res: Response){

    try{
        const result = await usersServices.registerUser(req.body);
        delete result.password;
        delete result.createdAt;
        
        return res.status(httpStatus.CREATED).send(result);
    } catch (error){
        console.log(error)
        if (error.name === "ConflictError"){
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}