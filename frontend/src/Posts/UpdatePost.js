import react from "react";
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "../App.css";

import axios from "axios";

const UpdatePost = () => {
  let navigate = useNavigate();
  const [id, setID] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setTitle(localStorage.getItem("Title"));
    setContent(localStorage.getItem("Content"));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.title);

    axios
      .put(`http://localhost:3002/api/v1/posts/${id}`, {
        title: data.title,
        content: data.content,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    navigate("/posts");
  };

  return (
    <>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label class="form-label" for="inputEmail">
            Title
          </label>

          <input
            onChange={(e) => setTitle(e.target.value)}
            class="form-control"
            {...register("title", {
              required: true,
              minLength: 10,
              maxLength: 50,
            })}
            defaultValue={title}
          />
          <p class="errors">
            {errors.title?.type === "required" &&
              "title is required.it should be atleast 10 and max 50 characters"}
          </p>
        </div>
        <div class="mb-3">
          <label class="form-label" for="inputPassword">
            Detail
          </label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            rows="3"
            class="form-control"
            placeholder="content"
            {...register("content", {
              required: true,
              minLength: 20,
              maxLength: 300,
            })}
            defaultValue={content}
          ></textarea>
          <p class="errors">
            {errors.content?.type === "required" &&
              "content is required.it should be atleast 20 and max 300 characters"}
          </p>
        </div>

        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
};

export default UpdatePost;
