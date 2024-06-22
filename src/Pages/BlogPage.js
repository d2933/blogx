import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import { baseUrl } from "../baseurl";
import BlogDeatils from "../components/BlogDetails";
import { useNavigate} from "react-router-dom";
import Appcontext from "../context/Appcontext"; 
// import AppcontextProvider from "../context/Appcontext";

export default function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const {loading,setloading} = useContext(Appcontext);
     
    const newBaseurl ="https://codehelp-apis.vercel.app/api/get-blog";
    const navigation =useNavigate();
    const location = useLocation();
    const blogId = location.pathname.split("/").pop(); 

    async function getRelatedBlog() {
        setloading(true);
        let url = `${newBaseurl}?blogId=${blogId}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs); 
        } catch (error) {
            console.error("Error fetching blog:", error);
            setBlog(null);
            setRelatedBlogs([]);
        } finally {
            setloading(false);
        }
    }

    useEffect(() => {
        if (blogId) {
            getRelatedBlog();
        }
    }, [blogId]);

    return (
        <div>
            <Header/>
            <div >
            <button onClick={()=>(navigation(-1))}>Back</button>
            </div>
            {
                loading?(<p>Loading</p>):(
                blog?(  
                    <div>
                  <BlogDeatils post={blog}/>
                  <h2>Related Blogs</h2>         
                  {
                    relatedBlogs.map((post)=>(
                        <div key={post.id}>
                        <BlogDeatils  post={post}/>
                        </div>
                    ))
                  }
                </div>
                 ):(
                  <div>
                 <p>No Blog Found</p>
                 </div>)
                )
            }
        </div>
    );
}
