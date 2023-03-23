import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NewBlogPage from './Pages/NewBlogPage';
import Layout from './Layouts/Layout';
import axios from 'axios';


const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {

  const [blogList, setblogList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(()=> {
    axios.get(`${urlEndPoint}/Blogs/`)
    .then(function (response){
      setblogList(response.data.blogs);
      
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
            blogList={blogList} 
            urlEndPoint={urlEndPoint} 
            setShouldRefresh={setShouldRefresh}
          />

        },
        { 
          path: "/new-blog-page",
          element: <NewBlogPage
          urlEndPoint={urlEndPoint} 
          setShouldRefresh={setShouldRefresh}/>
        },
       

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
