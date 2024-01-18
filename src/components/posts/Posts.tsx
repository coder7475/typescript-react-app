import { useEffect, useState } from "react";
import Post from "../../types/Post";
import fetchPosts from "../../utils/fetchPosts";
import { DataGrid  } from '@mui/x-data-grid';
const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      fetchPosts()
        .then(data => {
            setPosts(data);
        })
    
    }, []);

    // console.log(posts);
    
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 700 }
    ]

    return (
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={posts} columns={columns} autoPageSize/>
        </div>
    );
};

export default Posts;