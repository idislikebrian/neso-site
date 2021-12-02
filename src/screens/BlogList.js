import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Router>
                    <p>{blog.date}</p>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <div><p>{blog.body}</p></div>
                    <p>Written by {blog.author}</p>
                    </Router>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;