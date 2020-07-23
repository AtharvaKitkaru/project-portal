import React, { Component } from "react";

class SelectTask extends Component {
	render() {
		return (
			<div className="task container">
				<br />
				<div
					className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
					style={{ color: "#5b9ecf", fontSize: "1.1em" }}
				>
					Select Task
				</div>
				<br />
				<div className="bg-light vh-80" style={{ padding: "1rem" }}>
					<a href="/assignments">View Assignments</a>
					<br />
					<a href="/create-assignment">Create a new assignment</a>
				</div>
			</div>
		);
	}
}

export default SelectTask;
