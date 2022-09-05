import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostsList = () => {
  const [APIData, setAPIData] = useState([]);

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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIData.length > 0 ? (
            <>
              {APIData.map((post) => {
                return (
                  <Post post={post} key={post.id} setAPIData={setAPIData} />
                );
              })}
            </>
          ) : (
            <div className="load-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading data...</span>
              </div>
            </div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PostsList;
