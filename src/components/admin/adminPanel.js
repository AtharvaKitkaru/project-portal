import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./adminPanel.scss";
import AdminGIF from "./admin.gif";

class AdminPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="admin-panel row" style={{ width: "100%" }}>
				<div className="d-xl-flex justify-content-center align-items-center d-none col-7">
					<img
						src={AdminGIF}
						className="w-100"
						style={{ marginLeft: "30px" }}
						alt="admin"
					/>
				</div>
				<div className="d-flex flex-column col-xl-5 col-12 justify-content-center align-items-center my-4">
					<Card border="light" style={{ width: "100%" }}>
						<Card.Header as="h5" className="text-center">
							Admin Panel
						</Card.Header>
						<Card.Body>
							<Card.Title>Users</Card.Title>
							<Card.Text>
								Click on the type of users to view the list or
								handle requests
							</Card.Text>
							<Button variant="primary" href="/student">
								Student
							</Button>
							<span> </span>
							<Button variant="primary" href="/guide">
								Guide
							</Button>
							<hr />
							<Card.Title className="text-right">
								Assignments
							</Card.Title>
							<Card.Text className="text-right">
								Select the group to perform tasks on assignments
							</Card.Text>
							<Button
								variant="primary"
								className="pull-right"
								href="/select-group"
							>
								Select Group
							</Button>
							<br />
							<br />
							<hr />
							<Card.Title>Statistics</Card.Title>
							<Card.Text>Statistics Here</Card.Text>
							<Button variant="primary" href="/statistics">
								See Stats
							</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="bg" />
			</div>
		);
	}
}

export default AdminPanel;
