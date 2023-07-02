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

export type Post = {
    id: number;
    description: string;
    url: string;
    userId: number;
    createdAt: string;
}

export type CreatePost = Omit<Post, "id" | "createdAt">;