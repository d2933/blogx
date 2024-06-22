
import './App.css';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';
import { useContext, useEffect } from 'react';
import { Appcontext } from './context/Appcontext';
import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';

function App() {

   const{fetchBlogs} =useContext(Appcontext);
   const [searchParams,setsesrchParams]=useSearchParams();
   const location = useLocation();


   useEffect(() => {
    
       const page = searchParams.get('pages') ?? 1;
       if(location.pathname.includes('tags'))
        {
           //iska mtlb tag wala page show krna h
            const tag = location.pathname.split("/").at(-1).replace("-", " ");
            fetchBlogs(Number(page),tag);
        }
        else if(location.pathname.includes('categories'))
         {
          const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
          fetchBlogs(Number(page),null,category)

         }
        else
          {
            fetchBlogs(Number(page));
          }
  
  }, [location.pathname,location.search]);


  return (
    // <div className="w-full h-full flex flex-col justify-center items-center">
    //     <Header/>
    //     <Blogs/>
    //     <Pagination/>
    // </div>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/blog/:blogID" element={<BlogPage/>}></Route>
    <Route path="/tags/:tag" element={<TagPage/>}></Route>
    <Route path="/categories/:category" element={<CategoryPage/>}></Route>
    </Routes>
  );
}

export default App;
