import { useContext } from "react"
import { Appcontext } from "../context/Appcontext"
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";


export default function Blogs(){

 const {posts,loading} =useContext(Appcontext);

return(
<div className="w-11/12 max-w-[650px] py-5 flex flex-col gap-y-7 mt-[66px] mb-[70px]"> 
 {
  loading?(<Spinner/> ):(
   posts.length===0?(<div>
   <p>
    No Posts Found
   </p>
   </div>
    ):(
        posts.map((post)=>(
          <BlogDetails key={post.id} post={post}/>
        ))
    )
  )
 }

</div>

)

}