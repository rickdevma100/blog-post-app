import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from "../../features/blog/blogAction";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state)=>state.blogs.blogs);
  useEffect(() => {
      dispatch(fetchBlogs());   
  },[]);

  return (
    
    <div>
      {blogs.map((blog)=>(
       <React.Fragment>
        <h4><small>RECENT POSTS</small></h4>
        <hr/>
        <h2>{blog.title}</h2>
        <h5>Posted By Author, {blog.updatedAt}</h5>
        <p>{blog.content}</p>
        <br/><br/>
       </React.Fragment>
      ))}
      
    </div>
  )
}

export default Blog
