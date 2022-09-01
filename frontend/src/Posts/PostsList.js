import React from 'react'
import { Link } from 'react-router-dom';

const PostsList = () => {
  return (
<>
    <table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Clark</td>
            <td>Kent</td>
            <td>clarkkent@mail.com</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Peter</td>
            <td>Parker</td>
            <td>peterparker@mail.com</td>
        </tr>
        <tr>
            <td>3</td>
            <td>John</td>
            <td>Carter</td>
            <td>johncarter@mail.com</td>
        </tr>                    
    </tbody>
</table>

<div className='row'></div>
<Link className="nav-item nav-link" to="/posts/new">
                New Post
              </Link>

</>    
  )
}

export default PostsList;