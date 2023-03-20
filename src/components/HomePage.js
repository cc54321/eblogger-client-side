import { useState } from "react";
import getOneBlog from "../Controllers/blogsController";

//home page component 
const HomePage = (props) => {

    const {
        getOneBlog, 
        setgetOneBlog, 
        urlEndPoint,
        setShouldRefresh, 
    } = props

    return (
        <div>
            <h1>Featured Blog Post</h1>
            {getOneBlog.map((item, index) => {
                return (<getOneBlog 
                    Blog={item} 
                    setgetOneBlog={setgetOneBlog} 
                    urlEndPoint={urlEndPoint}
                    setShouldRefresh={setShouldRefresh}
                    key={index} /> 
                );
            })}
        </div>
    )
}

export default HomePage