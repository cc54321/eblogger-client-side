import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const NewBlogForm = (props) =>{
    const navigate = useNavigate();
    const {  urlEndPoint } = props;
    const { setShouldRefresh } = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");


    const postBlog = () =>{

    setShouldRefresh(true)
    console.log(urlEndPoint)
		const req =  {
      title: title,
      author: author,
      category: category,
      text: text
    }

    axios.post(`${urlEndPoint}/blogs/create-one`, req)
    .then(function (response) {
      console.log(response);
        setShouldRefresh(false);

    },{
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    .catch(function (error) {
      console.log(error);
    }); 

    }
    

    return(

      <div id = "blog-form">
        <label>Title: </label>
        <br/>
        <input type = 'text' placeholder="New Item" onChange={(e)=>{
          setTitle(e.target.value) }}
        />
        <br/>
        <label>Author: </label>
        <br/>
        <input type = 'text' placeholder="Author One" onChange={(e)=>{
        setAuthor(e.target.value) }}
        />
        <br/>
        <label>Category: </label>
        <br/>
        <input type = 'text'placeholder="Ipsum" onChange={(e)=>{
        setCategory(e.target.value) }}
        />
        <br/>
        <label>Blog Text: </label>
        <br/>
        <input type = 'text'placeholder="Loren ipsum dolor sit amet" onChange={(e)=>{
        setText(e.target.value) }}
        />
        <Button variant="primary" size="medium" onClick={()=>{
          postBlog()
          navigate("/")
        }}>
          Post
        </Button>        
      </div>
    )

}

export default NewBlogForm;