import React, { Component } from "react";
import { Table, Form, Button } from "react-bootstrap";

class StudentHandleRequests extends Component {
	render() {
		return (
			<div className="student-requests container">
				<br />
				<div
					className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
					style={{ color: "#5b9ecf", fontSize: "1.1em" }}
				>
					Handle Requests
				</div>
				<br />
				<Table striped bordered hover className="text-center">
					<thead>
						<tr>
							<th>Roll Number</th>
							<th>Name</th>
							<th>Group Number</th>
							<th>isLeader</th>
							<th>Remove Member from group</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>
								<Form>
									<Form.Group controlId="formBasicCheckbox">
										<Form.Check type="checkbox" />
									</Form.Group>
								</Form>
							</td>
							<td>
								<Form>
									<Button variant="info">Remove</Button>
								</Form>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}
export default StudentHandleRequests;
