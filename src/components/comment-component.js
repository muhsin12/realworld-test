import React from "react";
import { Link } from "react-router-dom";

function CommentComponent({ commentData }) {
  return (
    <div classNameName="col-lg-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{commentData.name}</h5>
          <p className="card-text">{commentData.body}</p>

          <Link className="btn btn-primary" to={`/comment/${commentData.id}`}>
            Go to Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommentComponent;
