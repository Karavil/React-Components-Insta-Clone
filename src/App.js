import React from "react";

import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage";

import "./App.css";

import postData from "./dummy-data.js";

const App = () => {
   return (
      <div className="App">
         <SearchBar />
         <PostsPage posts={postData}/>
      </div>
   );
};

export default App;
