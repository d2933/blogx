import { NavLink } from "react-router-dom"



export default function BlogDeatils({post})
{




return(
    <div>
     <div>
        <NavLink to={`/blog/${post.id}`}><span>{post.title}</span></NavLink>
        <p className="text-[13px]">
                By <span className="italic">{post.author}</span> on {" "}<NavLink to={`/categories/${post.category.replaceAll(" ","-")}`} className="underline font-bold"><span>{post.category}</span></NavLink> 
        </p>
        <p className="text-[13px] mt-[5px]">Posted on {post.date}</p>
        <p className="text-[13px] mt-[15px]">{post.content}</p>
        
        <div>
             {
             post.tags.map((tag,index)=>{
             return <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index} className="text-[12px] underline font-bold text-blue-500 px-[3px] mt-[4px]"><span> {`#${tag}`}</span></NavLink>})
             }

        </div>
        {/* <p className="font-bold text-lg">{post.title}</p> */}

       </div>
    </div>
)





}