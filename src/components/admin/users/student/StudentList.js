import React, { Component } from "react";
import { Table } from "react-bootstrap";

class StudentList extends Component {
	render() {
		return (
			<div className="student-list container">
				<br />
				<div
					className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
					style={{ color: "#5b9ecf", fontSize: "1.1em" }}
				>
					Student List
				</div>
				<br />
				<Table striped bordered hover className="text-center">
					<thead>
						<tr>
							<th>Roll Number</th>
							<th>Name</th>
							<th>Group Number</th>
							<th>Project Name</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814055</td>
							<td>Jill Shah</td>
							<td>1</td>
							<td>Light detector</td>
						</tr>
						<tr>
							<td>1814040</td>
							<td>Nishavak Naik</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
						<tr>
							<td>1814033</td>
							<td>Atharva Kitkaru</td>
							<td>1</td>
							<td>Light Detector</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}
export default StudentList;
