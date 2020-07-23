import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";

class Student extends Component {
	render() {
		return (
			<div className="student container">
				<br />
				<div
					className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
					style={{ color: "#5b9ecf", fontSize: "1.1em" }}
				>
					Student Section
				</div>
				<br />
				<CardDeck className="row">
					<Card className="col-md-6">
						<Card.Body>
							<Card.Title
								className="font-weight-bold"
								style={{ color: "#0A1A6B", fontSize: "1.1em" }}
							>
								Student List
							</Card.Title>
							<Card.Text>
								Click to see the list of registered students
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<a href="/student-list">Click Here!</a>
						</Card.Footer>
					</Card>
					<Card className="col-md-6">
						<Card.Body>
							<Card.Title
								className="font-weight-bold"
								style={{ color: "#0A1A6B", fontSize: "1.1em" }}
							>
								Handle Requests
							</Card.Title>
							<Card.Text>
								Click to make a student leader or to remove a
								student from a group
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<a href="/student-requests">Click Here!</a>
						</Card.Footer>
					</Card>
				</CardDeck>
			</div>
		);
	}
}
export default Student;
