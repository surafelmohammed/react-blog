import BlogList from "./BlogList";
import React from "react";
import useFatch from "./useFatch";

const Home = () => {

  const {data,isPending,error} = useFatch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {data && <BlogList blogs={data} title="All Blogs"/>
}    </div>
  );
}
 
export default Home;
