import React, { useState } from "react";
import { getComments } from "../services/comment-service";
import CommentComponent from "../components/comment-component";

function CommentsPage() {
  const [Comments, setComments] = useState([]);
  function handleClick() {
    getComments().then((response) => {
      setComments(response);
    });
  }
  return (
    <div>
      <center>
        <button className="load-button" onClick={handleClick}>
          Load Comments
        </button>
      </center>
      <div className="comments-container row">
        {Comments.map((el) => (
          <CommentComponent key={el.id} commentData={el} />
        ))}
      </div>
    </div>
  );
}

export default CommentsPage;
