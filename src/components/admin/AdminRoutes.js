import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import app from "../../Firebase";
import AdminPanel from "./adminPanel";
import Student from "./users/student/Student";
import StudentList from "./users/student/StudentList";
import StudentHandleRequests from "./users/student/StudentHandleRequests";
import Guide from "./users/guide/Guide";
import Statistics from "./statistics/Statistics";
import SelectGroup from "./assignments/selectGroup";
import SelectTask from "./assignments/selectTask";
import CreateAssignment from "./assignments/createAssignment";

const AdminRoutes = () => {
	return (
		<BrowserRouter>
			<Route
				path={["/signin", "/signup", "forgot-password"]}
				render={() => <Redirect to="/" />}
			/>
			<div onClick={() => app.auth().signOut()}>Sign out</div>
			<Route exact path="/" component={AdminPanel} />
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
		</BrowserRouter>
	);
};

export default AdminRoutes;
