import { ApplicationError } from "@/protocols";

export function notFoundError (element?: string): ApplicationError {
    return {
        name: "NotFoundError",
        message: element ? `${element} not found. Create one now! :)` : "Not found."
    }
}