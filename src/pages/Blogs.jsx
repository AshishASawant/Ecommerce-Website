import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import BlogCard from "../components/BlogCard";

export const blogsContent = [
  {
    img: require("../assets/images/blog-1.jpg"),
    date: "23 Mar,2023",
    author: "Ashish Sawant",
    title: "A Beautiful Sunday Morning Renaissance",
    desc: "You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.",
  },
];

const Blogs = () => {


  return (
    <section className="grid place-items-center">
      <Breadcrumb title="Blogs" />
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1450px]  lg:gap-10 gap-5 pt-16 px-4">
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
        {blogsContent.map((item, i) =>  <BlogCard item={item} key={i}/>)}
      </div>
    </section>
  );
};

export default Blogs;
