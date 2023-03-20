import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';



const getAllBlogs = (props) => {

	const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("")
	const [text, setText] = useState("")
	const [author, setAuthor] = useState("")
	const [categories, setCategories] = useState("")
	const [year, setYear] = useState("")
}
	//instantiate navigator 
	const navigate = useNavigate();

    const handlegetAllBlogs = async () => {

		//if we are creating a new entry, let's refresh the page
		setShouldRefresh(true)

		console.log(urlEndPoint)
		const req =  {
            title: title,
            text: text,
            author: author,
			categories: categories,
			year: year
          }
		console.log(req);
        axios.post(`${urlEndPoint}/Blogs/allBlogs`, req)
          .then(function (response) {
            console.log(response);
          },{
			'Content-Type': 'application/x-www-form-urlencoded'
		  })
          .catch(function (error) {
            console.log(error);
          }); 

		  setShouldRefresh(false);
    }


    return (
		<div>
			<h1>Blog Page</h1>
			<label>Title</label>
			<input type="text" onChange={(e)=>{
				setTitle(e.target.value)
			}} />
			<br/>
			<label>Text</label>
			<textarea type="text" onChange={(e)=>{
				setText(e.target.value)
			}} />
			<br/>
			<label>Author</label>
			<select onChange={(e)=>{
				setAuthor(e.target.value)
			}}>
			<br/>
			<label>Categories</label>
			<select onChange={(e)=>{
				setCategories(e.target.value)
			}}>
				<br/>
				<label>Year</label>
				<select onChange={(e)=>{
					setYear(e.target.value)
			}}>
				<br/>
		<div>	

	});

	}









export default BlogPage