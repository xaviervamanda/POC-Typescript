import { notFoundError } from "@/errors/notFoundError";
import * as postsRepositories from "@/repositories/posts.repositories";
import { CreatePost } from "@/protocols";
import { conflictError } from "@/errors/conflictError";

export async function getAllPosts (){

    const result = await postsRepositories.getAllPosts();

    if (result.rowCount === 0) {
        throw notFoundError("posts");
    }

    return result;
}

export async function createPost (body: CreatePost){

    const post = await postsRepositories.getPostByDescription(body.description, body.userId);

    if (post.rowCount !== 0){
        throw conflictError("Post");
    }

    await postsRepositories.createPost(body);

    const result = await postsRepositories.getPostByDescription(body.description, body.userId)
    return result.rows[0];
}