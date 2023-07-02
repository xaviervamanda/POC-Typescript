import { db } from "@/database/database.connection";
import { Post, CreatePost } from "@/protocols";

export function getAllPosts() {
    return db.query("SELECT * FROM posts;");
}

export function getPostByDescription (description: string, userId: number) {
    return db.query<Post>(`SELECT * FROM posts WHERE description = $1 AND "userId" = $2;`, [description, userId]);
}

export function getPostById (id: number) {
    return db.query<Post>(`SELECT * FROM posts WHERE id = $1;`, [id]);
}
export function createPost(body: CreatePost) {
    return db.query(`INSERT INTO posts (description, url, "userId") VALUES ($1, $2, $3);`, [body.description, body.url, body.userId]);
}

export function deletePost (id){
    return db.query("DELETE FROM posts WHERE id = $1", [id]);
}

export function updatePost (id, body){
    return db.query("UPDATE posts SET description = $1, url = $2 WHERE id = $3", [body.description, body.url, id]);
}