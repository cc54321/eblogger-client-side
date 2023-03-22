import { useState } from "react";
import BlogCard from "../Components/BlogCard";

//home page component 
const BlogPage = (props) => {

    return (
        <div id="blogCardsContainer">
            <BlogCard  blogList={props.blogList}/>
            
        </div>
    )
}

export default BlogPage