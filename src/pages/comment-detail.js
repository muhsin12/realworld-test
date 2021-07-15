import React, { useState, useEffect } from "react";
import { getCommentDetails } from "../services/comment-service";

function CommentDetailPage({ match }) {
  const [CommentsInfo, setCommentsInfo] = useState({});
  const id = match.params.id;

  useEffect(() => {
    getCommentDetails(id).then((data) => {
      setCommentsInfo(data);
    });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{CommentsInfo.name}</h3>
          <h3 className="card-title">{CommentsInfo.email}</h3>
          <p className="card-text">{CommentsInfo.body}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentDetailPage;
