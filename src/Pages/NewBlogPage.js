
import axios from 'axios';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import NewBlogForm from '../Components/CreateBlogForm';


const NewBlogPage = (props) =>{
  

    return(
      <NewBlogForm urlEndPoint={props.urlEndPoint} setShouldRefresh={props.setShouldRefresh}/>
    )

}

export default NewBlogPage;