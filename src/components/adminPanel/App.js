import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import $ from "jquery";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import AssignmentList from "./components/assignmentList/AssignmentList";
import Profile from "./components/profile/Profile";
import AssignmentDetails from "./components/assignmentDetails/AssignmentDetails";
import GroupRegistration from "./components/groupRegistration/GroupRegistration";
import ProjectRegistration from "./components/projectRegistration/ProjectRegistration";
import AdminPanel from "./components/adminPanel/adminPanel";
import Student from "./components/adminPanel/users/student/Student";
import StudentList from "./components/adminPanel/users/student/StudentList";
import StudentHandleRequests from "./components/adminPanel/users/student/StudentHandleRequests";
import Guide from "./components/adminPanel/users/guide/Guide";
import Statistics from "./components/adminPanel/statistics/Statistics";
import SelectGroup from "./components/adminPanel/assignments/selectGroup";
import SelectTask from "./components/adminPanel/assignments/selectTask";
import CreateAssignment from "./components/adminPanel/assignments/createAssignment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    $(function() {
      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover();
      $(".popover-dismiss").popover({
        trigger: "focus"
      });
      $(".toast").toast("show");
      $(".alert").alert();
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/group-registration" component={GroupRegistration} />
          <Route path="/project-registration" component={ProjectRegistration} />
          <Route path={["/signin", "/signup", "/forgot-password"]}>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Route>
          <Fragment>
            <Header />
            <div style={{ marginTop: "4.3em" }} />

            <Route
              exact
              path={["/", "/assignments"]}
              component={AssignmentList}
            />
            <Route path="/assignment" id={1}>
              <AssignmentDetails />
            </Route>
            <Route path="/profile" component={Profile} />
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/select-group" component={SelectGroup} />
            <Route exact path="/group-task" component={SelectTask} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/student-list" component={StudentList} />
            <Route
              exact
              path="/create-assignment"
              component={CreateAssignment}
            />
            <Route
              exact
              path="/student-requests"
              component={StudentHandleRequests}
            />
            <Route exact path="/guide" component={Guide} />
            <Route path="/admin-panel" component={AdminPanel} />
          </Fragment>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
