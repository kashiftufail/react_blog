import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { id, title, content } = props.post;
  let url = `/posts/${id}/edit`;

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3002/api/v1/posts/${id}`)
      .then((response) => {
        props.setAPIData(response.data);
      });
  };

  const setData = (data) => {
    let { id, title, content } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Content", content);
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
      <td>
        <Link to={url}>
          <button
            type="button"
            class="btn btn-info btn-sm"
            onClick={() => setData(props.post)}
          >
            Update
          </button>
        </Link>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-info btn-sm"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Post;
