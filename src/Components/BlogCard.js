
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const BlogCard =(props)=>{

    const { setShouldRefresh } = props;



    const {blogList} = props;
    // console.log(blogList)


    const deletePost = (id)=>{
        setShouldRefresh(true)

        axios.delete(`${urlEndPoint}/blogs/delete-one/${id}`)
        .then(function (response) {
            setShouldRefresh(false);
        },{
          'Content-Type': 'application/x-www-form-urlencoded'
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
                <Button variant="primary">View</Button>{' '}
                <div id="card-buttons">
                     <Button variant="danger" onClick={()=>{ 
                        deletePost(blog.id)
                    }}>Delete</Button>

                </div>
    
            </div>

            
        ))

    );
}

export default BlogCard;