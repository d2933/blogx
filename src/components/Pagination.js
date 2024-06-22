import { useContext } from "react"
import { Appcontext } from "../context/Appcontext"

export default function Pagination(){

   const {page,handlePageChange,totalPages} = useContext(Appcontext);

    return(
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white ">
        <div className="flex  w-11/12 max-w-[650px] justify-between py-2 ">
        <div className="flex gap-x-2">
            {
              page>1 &&
              <button className="rounded-md border-2 px-1.5 py-1.5"onClick={()=>(handlePageChange(page-1))}>Previous</button>
            }
            {       
               page<totalPages &&
              <button className="rounded-md border-2 px-1.5 py-1.5" onClick={()=>(handlePageChange(page+1))}>Next</button>

            }
            </div>
            <p className="font-bold text-sm">
              Page {page} of {totalPages}
            </p>
            
        </div>
    </div>
    
    )
    
    
    
    
    }