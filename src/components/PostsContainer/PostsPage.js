//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = props => {
   const generatedPosts = props.posts.map((post, index) => {
      return <Post key={index} post={post}/>
   });
   return (
      <div className="posts-container-wrapper">
         {generatedPosts}
      </div>
   );
};

export default PostsPage;

