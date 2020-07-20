import React from "react";
import AssignmentList from "./AssignmentList";
import { Route } from "react-router-dom";
import Assignment from "./Assignment";
import Profile from "./profile/Profile";

const StudentRoutes = () => {
  return (
    <div className="noselect">
      <Route
        exact
        path={["/", "/assignment-list"]}
        component={AssignmentList}
      />
      <Route path="/assignment/:id" component={Assignment} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default StudentRoutes;
