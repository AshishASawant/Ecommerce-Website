import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { BsArrowLeft, BsPinterest } from "react-icons/bs";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import CommentCard from "../components/CommentCard";

const SingleBlog = () => {
  let root = useLocation();

  const commentData = [
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam eius repudiandae porro blanditiis sapiente sint ex soluta possimus repellendus, optio quibusdam consequuntur ullam aspernatur voluptate animi neque tempore dolores qui tempora ipsum beatae.",
      user: "Ashish",
      date: "23 Mar, 2023",
    },
  ];

  const SmallBlog=()=>{
    return(<Link to='/blogs' className="flex items-center gap-3 px-2 py-5 border-b-2 border-slate-400 ">
        <img src={ require("../assets/images/blog-1.jpg")} alt="blog" className="h-full w-24" />
        <div className="grid gap-2">
            <p className="line-clamp-2 md:leading-none lg:leading-normal">
              You’re only as good as your last collection, which is an enormous
              pressure. I think there is something about luxury – it’s not
              something people need, but it’s what they want. It really pulls at
              their heart.
            </p>
            <div className="flex leading-none text-sm">
              <span className="border-r-2 border-slate-400 pr-4 ">
                24 Mar, 2030
              </span>
              <span className="pl-4">Ashish Sawant</span>
            </div>
          </div>
    </Link>)
  }

  return (
    <section className="grid place-items-center w-full">
      <Breadcrumb title={root.search.split("?")[1].split("%20").join(" ")} />
      <div className="max-w-[1450px] pt-10 px-4 w-full flex gap-5 lg:gap-10">
        <div className="lg:w-[25rem] px-4 bg-secondary rounded-md sticky top-2 max-h-[97.5vh] h-min overflow-scroll hidden lg:block">
            <h2 className="font-medium text-2xl h-min mb-2 sticky top-0 py-4 bg-secondary">Continue Reading</h2>
            <div className="grid border-t-2 border-slate-400 ">
                {<SmallBlog/>}
                {<SmallBlog/>}
                {<SmallBlog/>}
                {<SmallBlog/>}
                {<SmallBlog/>}
            </div>
        </div>
        {/* <div className="flex flex-col flex-1 rounded-lg overflow-hidden text-text-secondary"> */}
        <div className="flex flex-col flex-1 rounded-lg overflow-hidden text-slate-600">
          <h1 className="text-3xl font-semibold mb-7 text-black">
            A Beautiful Sunday Morning Renaissance
          </h1>
          <img
            src={require("../assets/images/blog-1.jpg")}
            alt="blog"
            className="w-full aspect-square md:aspect-video"
          />
          <div className="grid gap-5 mt-5">
            <p>
              You’re only as good as your last collection, which is an enormous
              pressure. I think there is something about luxury – it’s not
              something people need, but it’s what they want. It really pulls at
              their heart. I have a fantastic relationship with
              money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum
              pretium commodo inceptos cum condimentum placerat diam venenatis
              blandit hac eget dis lacus a parturient a accumsan nisl ante
              vestibulum.
            </p>
            <div className="flex leading-none">
              <span className="border-r-2 border-slate-400 pr-4 ">
                24 Mar, 2030
              </span>
              <span className="pl-4">Ashish Sawant</span>
            </div>
          </div>
          <div className="flex justify-between items-center my-10 md:py-10 py-7 border-y-2 border-slate-500 flex-wrap ">
            <Link to="/blogs" className="font-medium text-lg flex flex-1 whitespace-nowrap">
              <BsArrowLeft className="inline-block mr-3 text-3xl" />
              Back to blog
            </Link>
            <div className="flex lg:gap-10 gap-2 justify-end text-3xl flex-1">
              <AiFillFacebook />
              <AiFillInstagram />
              <BsPinterest />
            </div>
          </div>
          <div className="grid gap-5">
            <h2 className=" text-3xl ">5 Comment</h2>
            <div className="w-full grid gap-5">
              {commentData.map((item, i) => <CommentCard props={item} key={i}/>)}
              {commentData.map((item, i) => <CommentCard props={item} key={i}/>)}
              {commentData.map((item, i) => <CommentCard props={item} key={i}/>)}
              {commentData.map((item, i) => <CommentCard props={item} key={i}/>)}
            </div>
            <div className="w-full gird p-5 bg-secondary">
              <form>
                <textarea rows='4' type="text" placeholder="Add Comment*" className="w-full outline-none p-4 rounded-md" />
                <button className="px-6 py-2 bg-slate-700 rounded-full mt-4 hover:bg-bg-hover text-text-primary hover:text-text-secondary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
