import Post from "../types/Post";

async function fetchPosts(): Promise<Post[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
}

export default fetchPosts;