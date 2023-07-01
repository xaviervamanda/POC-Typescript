import { ApplicationError } from "@/protocols";

export function conflictError (element: string): ApplicationError {
    return {
        name: "ConflictError",
        message: element ? `${element} is already registered` : "It is already registered",
    }
}