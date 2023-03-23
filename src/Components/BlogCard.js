import { useState } from "react";
import axios from 'axios';

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const BlogCard =(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { setShouldRefresh } = props;



    const {blogList} = props;
    


    const deletePost = (id)=>{
        setShouldRefresh(true)

        axios.delete(`${urlEndPoint}/blogs/delete-one/${id}`)
        .then(function (response) {
            setShouldRefresh(false);
        },{
          'Content-Type': 'application/urlencoded'
        })
        .catch(function (error) {
          console.log(error);
        }); 
    
        
    }

    return(
        blogList.map(blog=>(
            <div id="cardContainer">

                <h1>{blog.title}</h1>
                <h3>{blog.author}</h3>
                <h4>Created: {blog.createdAt}</h4>
                <h4>Modified: {blog.lastModified}</h4>
                <p>{blog.text}</p>
                <p>Categories: {blog.categories.join(", ")}</p>
                

                
    
            </div>

            
        ))

    );
}

export default BlogCard;
