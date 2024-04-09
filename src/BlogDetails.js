import { useParams} from "react-router-dom";
import useFatch from "./useFatch";

const BlogDetails = () => {
    const {id } = useParams();
    const {data,isPending,error} = useFatch('http://localhost:8000/blogs/'+id)


    return ( 
        <div className="blog-details">
            {isPending&&<div>Loading...</div>}
            {error&&<div>faild to fatch data</div>}
            {data&&
            (<article>
                <h2>{data.title}</h2>
                <p>Written by {data.author}</p>
                <div>{data.body}</div>
            </article>)
            }

        </div>
     );
}
 
export default BlogDetails;