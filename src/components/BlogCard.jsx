import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard=({item})=>{
    const { img, date, title, desc } = item;
    return (
        <div className="flex gap-4 flex-col jus bg-bg-secondary rounded-md w-full overflow-hidden blog-card">
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt="blog"
                  className="w-full h-min transition-all duration-300 ease-in-out shadow-md"
                  />
              </div>
              <div className="sm:p-6 p-2 grid gap-3 ">
                <p className="text-text-secondary">{date}</p>
                <h1 className="font-medium sm:text-xl">{title}</h1>
                <p className="line-clamp-2 text-text-secondary">{desc}</p>
                <Link to={`/blogs/singleblog?${title}`} className="bg-slate-800 text-text-primary hover:bg-bg-hover hover:text-text-secondary sm:px-6 sm:py-3 px-4 py-2 w-fit rounded-3xl">
                  Read More
                </Link>
              </div>
            </div>
          );
  }
  
  export default BlogCard