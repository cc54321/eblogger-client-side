import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NewBlog from './Pages/NewBlog';
import BlogPage from './Pages/BlogPage';
import Layout from './Layouts/Layout';
import BlogCard from './Components/BlogCard';
import NavBar from './Components/NavBar';
import axios from 'axios';


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {

  const [BlogCard, setBlogCard] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(()=> {
    axios.get(`${urlEndPoint}/Blogs/`)
    .then(function (response){
      console.log(response);
      setBlogCard(response.data.blogs);
      
    })
    .catch(function (error){
      console.log(error);
    })
    .finally(function (){
      //always executed
    })

  },[])
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage 
            BlogCard={BlogCard} 
            urlEndPoint={urlEndPoint} 
            setShouldRefresh={setShouldRefresh}
          />

        },
        { 
          path: "/new-blog",
          element: <NewBlog 
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        },
        { 
          path: "/blog-page",
          element: <BlogPage
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        }

      ]

    }
  ])


  return(
    <div className="App-header">
      <RouterProvider router={router} />
    </div>
  ); 
}

export default App;
