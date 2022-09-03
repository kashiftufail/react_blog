import React from "react";
import axios from "axios";

const Post = (props) => {
  const { id, title, content } = props.post;

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3002/api/v1/posts/${id}`)
      .then((response) => {
        props.setAPIData(response.data);
      });
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{content}</td>
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
