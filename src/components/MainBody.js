import NewPost from "./NewPost";
import classes from "./MainBody.module.css";
import { useState } from "react";

function MainBody({ showPost }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts([postData, ...posts]);
  }

  return (
    <>
      <div className={classes.body}>
        <NewPost showPost={showPost} addPostHandler={addPostHandler} />
      </div>
      <div className={classes.container}>
      {posts.map((e) => (
          <div className={classes.items}>
            <p>{e.content}</p>
            <p>{e.writer}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainBody;
