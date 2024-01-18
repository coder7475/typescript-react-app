import { useEffect, useState } from "react";
import Post from "../../types/Post";
import fetchPosts from "../../utils/fetchPosts";

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      fetchPosts()
        .then(data => {
            setPosts(data);
        })
    
    }, []);

    console.log(posts);
    

    return (
        <div>
            All Posts here.
        </div>
    );
};

export default Posts;