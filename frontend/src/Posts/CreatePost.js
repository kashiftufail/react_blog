import react from "react";
import useInput from "../useInput";
import { useForm } from "react-hook-form";


import React from "react";

const CreatePost = () => {



    // const title = useInput("");
    // const detail = useInput("");

    // const submitForm = (event) => {
    //     event.preventDefault();
    //     console.log("email", title.value);
    //     console.log("password", detail.value);
    // };

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data.title);
  



  return (
    // <div>CreatePost</div>
    <>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-3">
        <label class="form-label" for="inputEmail">Title</label>
        {/* <input type="text" class="form-control" id="inputEmail" placeholder="title" {...title}/> */}
        <input class="form-control" {...register("title", { required: true, maxLength: 20 })} />

    </div>
    <div class="mb-3">
        <label class="form-label" for="inputPassword">Detail</label>
        <textarea rows="3" class="form-control" id="postalAddress" placeholder="deail" {...register("detail", { required: true, maxLength: 20 })}> </textarea>
    </div>
    {/* <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkRemember"/>
            <label class="form-check-label" for="checkRemember">Remember me</label>
        </div>
    </div> */}
    <button type="submit" class="btn btn-primary">Create</button>
</form>
    </>
  );
};

export default CreatePost;
