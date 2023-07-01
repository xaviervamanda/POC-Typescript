import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';

export function validateSchema(schema: ObjectSchema){
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, {abortEarly: false})
        if(validation.error){
            const errors = validation.error.details.map(error => error.message)
            return res.status(httpStatus.BAD_REQUEST).send(errors);
        }
        next();
    }
}
