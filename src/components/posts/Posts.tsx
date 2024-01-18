import { useEffect, useState } from "react";
import Post from "../../types/Posts";
import fetchPosts from "../../utils/fetchPosts";
import { DataGrid } from "@mui/x-data-grid";
import Departments from '../departments/Departments';

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 700 },
];

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  // console.log(posts);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Second Page</h1>
      <h2 style={{ textAlign: "center" }}>Table of Posts</h2>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={posts} columns={columns} autoPageSize />
      </div>
      <h2 style={{ textAlign: "center"}}>Select Departments</h2>
      <Departments></Departments>
    </>
  );
};

export default Posts;
