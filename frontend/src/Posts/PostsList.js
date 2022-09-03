import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostsList = () => {
  const [APIData, setAPIData] = useState([]);

  const handleChange = (newValue) =>{
    setAPIData(newValue);

  }
  useEffect(() => {
    axios.get("http://localhost:3002/api/v1/posts").then((response) => {

      setAPIData(response.data);
    });
  }, []);

  return (
    <>
      <div class="row"></div>
      <Link class="nav-item nav-link" to="/posts/new">
        New Post
      </Link>

      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {APIData.length > 0 ? (
            <>
              {APIData.map((post) => {
                return <Post post={post} setAPIData={setAPIData}   />;
              })}
            </>
          ) : (
            <div className="empty">
              <h1>no record</h1>
            </div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PostsList;
