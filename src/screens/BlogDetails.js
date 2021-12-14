import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('https://neso-server.herokuapp.com/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('https://neso-server.herokuapp.com/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>{blog.date}</p>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
            </article>
        </div>
     );
}
 
export default BlogDetails;