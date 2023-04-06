
import NewBlogForm from '../Components/NewBlogForm';


const NewBlogPage = (props) =>{
  

    return(
      <NewBlogForm urlEndPoint={props.urlEndPoint} setShouldRefresh={props.setShouldRefresh}/>
    )

}

export default NewBlogPage;

