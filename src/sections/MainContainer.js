import React from "react";
import { Route, Switch } from "react-router-dom";

import CommentsPage from "../pages/comments";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import CommentDetailPage from "../pages/comment-detail";

function MainContainer() {
  return (
    <div className="mainContent">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/comments" component={CommentsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/comment/:id" component={CommentDetailPage} ></Route>
      </Switch>
    </div>
  );
}

export default MainContainer;
