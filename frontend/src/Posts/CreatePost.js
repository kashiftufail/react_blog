import react from "react";
import useInput from "../useInput";

import React from 'react'

const CreatePost = () => {
  return (
    // <div>CreatePost</div>
<>
<div class="input-group mt-2">
    <span class="input-group-text">Default</span>
    <input type="text" placeholder="Title" class="form-control" />
</div>

<div class="input-group mt-2">
    <span class="input-group-text">Detail</span>
    <input type="text" placeholder="Title" class="form-control" />
</div>
</>
  )
}

export default CreatePost