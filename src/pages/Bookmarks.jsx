import { useEffect, useState } from "react";
import { getBlogs } from "../Utlis";
import BlogCart from "../components/BlogCart/BlogCart";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])
    return (
        <div>
            <div className="h-20">
            
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            blogs.map(blog => <BlogCart key={blog.id} blog={blog}></BlogCart>)
          }
          </div>
        </div>
    );
};

export default Bookmarks;