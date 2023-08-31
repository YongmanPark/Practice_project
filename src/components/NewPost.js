import { useState } from "react";

function NewPost({ showPost, addPostHandler }) {
  const [contentInfo, setContentInfo] = useState("");
  const [writerInfo, setWiterInfo] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
        content : contentInfo,
        writer : writerInfo
      };
      addPostHandler(postData);
  }

  function contentHandler(event) {
    setContentInfo(event.target.value);
  }
  function writerHandler(event) {
    setWiterInfo(event.target.value);
  }

  return (
    <div>
      {showPost && (
        <form onSubmit={submitHandler}>
          <p>
            <label htmlFor="content">내용</label>
            <textarea rows={3} name="content" onChange={contentHandler} />
          </p>
          <p>
            <label htmlFor="writer">작성자</label>
            <input type="text" name="writer" onChange={writerHandler} />
          </p>
          <button type="submit">제출</button>
        </form>
      )}
    </div>
  );
}

export default NewPost;
