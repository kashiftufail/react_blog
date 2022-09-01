import react from "react";
import useInput from "../useInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "../App.css";

import axios from 'axios';


const CreatePost = () => {

  const API_URL = "http://localhost:3002/api/v1/"
  let navigate = useNavigate();


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {

    axios.post('http://localhost:3002/api/v1/posts', {
      title: data.title,
      content: data.content
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    navigate('/about');


    // console.log(data);
  }

  return (

    <>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label class="form-label" for="inputEmail">
            Title
          </label>
        
          <input
            class="form-control"
            {...register("title", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <p class="errors">
            {errors.title?.type === "required" &&
              "title is required.it should be atleast 5 and max 20 characters"}
          </p>
        </div>
        <div class="mb-3">
          <label class="form-label" for="inputPassword">
            Detail
          </label>
          <textarea
            rows="3"
            class="form-control"
            placeholder="content"
            {...register("content", {
              required: true,
              minLength: 20,
              maxLength: 300,
            })}
          >
            
          </textarea>
          <p class="errors">
          {errors.content?.type === "required" &&
            "content is required.it should be atleast 20 and max 20 characters"}
          </p>  
        </div>
        
        <button type="submit" class="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
};

export default CreatePost;
