

import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NewBlogPage from './Pages/NewBlogPage';
import Layout from './Layouts/Layouts';
import axios from 'axios';
import Login from './Pages/Login';
import Register from './Pages/Register';


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;
function App() {

  const [blogList, setBlogList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(()=> {
    axios.get(`${urlEndPoint}/Blogs/`)
    .then(function (response){
      console.log(response);
      setBlogList(response.data.blogs);
      
    })
    .catch(function (error){
      console.log(error);
    })
    .finally(function (){
      //always executed
    })

  },[shouldRefresh])
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage 
            blogList={blogList} 
            urlEndPoint={urlEndPoint} 
            setShouldRefresh={setShouldRefresh}
          />

        },
        { 
          path: "/new-blog",
          element: <NewBlogPage 
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        }.element,

        { 
          path: "/login",
          element: <Login 
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        },

        { 
          path: "/register",
          element: <Register 
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
