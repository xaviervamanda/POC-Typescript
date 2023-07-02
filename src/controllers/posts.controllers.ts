import { Request, Response } from "express";
import * as postsServices from "@/services/posts.services";
import httpStatus from "http-status";

export async function getAllPosts (req: Request, res: Response) {
    
    try{
        const result = await postsServices.getAllPosts();
        
        return res.status(httpStatus.OK).send(result.rows);
    } catch (error) {
        if (error.name === "NotFoundError"){
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
}

export async function createPost (req: Request, res: Response) {
    
    try{
        const result = await postsServices.createPost(req.body);
        delete result.createdAt;
        delete result.userId;
        
        return res.status(httpStatus.CREATED).send(result);
    } catch (error) {
        if (error.name === "ConflictError"){
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
}

export async function deletePost (req: Request, res: Response) {
    const {id} = req.params;
    
    try{
        await postsServices.deletePost(Number(id));
        
        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        if (error.name === "NotFoundError"){
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
}

export async function updatePost (req: Request, res: Response) {
    const {id} = req.params;
    
    try{
        await postsServices.updatePost(Number(id), req.body);
        
        return res.sendStatus(httpStatus.OK);
    } catch (error) {
        if (error.name === "NotFoundError"){
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message)
    }
}