export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
}

export type CreateUser = Omit<User, "id" | "createdAt">;

export type ApplicationError = {
    name: string;
    message: string;
  };