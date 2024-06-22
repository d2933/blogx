import React from "react";
import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";
import { useNavigate } from "react-router-dom";

export  const Appcontext = createContext();

export default function AppcontextProvider({ children }) {

    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setPage] = useState("1");
    const [totalPages, setTotalPages] = useState(1);
    const navigate= useNavigate();

    async function fetchBlogs(page = 1,tag=null,category) {
        setloading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url +=`&tag=${tag}`
        }
        if(category){
            url +=`&category=${category}`
        }
        try {

            const result = await fetch(url);
            const data = await result.json();
             
            setposts(data.posts)
            setTotalPages(data.totalPages)
            setPage(data.page)
        }
        catch (error) {
            
            console.log("Error in fetching Data");
            setPage(1);
            setTotalPages(null);
            setposts([]);

        }
       setloading(false);
    }

    function handlePageChange(page)
    {   
           navigate({search:`?page=${page}`});
           setPage(page);
 
    }

    const value = {

        loading, setloading
        , posts, setposts,
        page, setPage,
        totalPages, setTotalPages,
        fetchBlogs,handlePageChange

    }
    
    return <Appcontext.Provider value={value}>
        {children}
     </Appcontext.Provider>

}