import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h4>{title}</h4>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Router>
                    <p>{blog.date}</p>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <center>
                    <div dangerouslySetInnerHTML={{ __html: blog.youtubeLink }}></div>
                    </center>
                    <div dangerouslySetInnerHTML={{__html:blog.body}}></div>
                    <p>Written by {blog.author}</p>
                    </Router>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;