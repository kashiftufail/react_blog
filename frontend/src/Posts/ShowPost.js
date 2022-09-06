import react from "react";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import "../App.css";

import axios from "axios";

const ShowPost = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/v1/posts/${params.id}/comments`)
      .then((response) => {
        setId(response.data[0].id);
        setTitle(response.data[0].title);
        setContent(response.data[0].content);
        setComments(response.data[1]);
      });
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data.title);

    axios
      .post(`http://localhost:3002/api/v1/posts/${params.id}/comments`, {
        content: data.content,
      })
      .then(function (response) {
        setComments(response.data);
        e.target.reset();
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  return (
    <>
      <h1>{title}</h1>

      <div className="container">
        <div className="row">
          <p>{content}</p>
        </div>
      </div>

      <h2>Comments</h2>

      <div className="container">
        <ul>
          {comments.map((comment) => (
            <li><p className="text-secondary"><strong>{comment.content}</strong></p></li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label class="form-label" for="inputPassword">
            Comment
          </label>
          <textarea
            rows="3"
            class="form-control"
            placeholder="content"
            {...register("content", {
              required: true,
              minLength: 5,
              maxLength: 200,
            })}
          ></textarea>
          <p class="errors">
            {errors.content?.type === "required" &&
              "content is required.it should be atleast 5 and max 200 characters"}
          </p>
        </div>

        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
};

export default ShowPost;
