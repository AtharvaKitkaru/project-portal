import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateAssignment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			description: "",
			weightage: "",
			dueDate: "",
		};
	}
	render() {
		return (
			<div className="container pt-3">
				<br />
				<div
					className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
					style={{ color: "#5b9ecf", fontSize: "1.1em" }}
				>
					Create New Assignment
				</div>
				<br />
				<form autoComplete="off">
					<div className="form-group w-100">
						<label htmlFor="title">Title</label>
						<input
							className="form-control shadow-sm"
							type="text"
							name="title"
							id="title"
						/>
					</div>
					<div className="form-group w-100">
						<label htmlFor="description">Description</label>
						<input
							className="form-control shadow-sm"
							type="textarea"
							name="description"
							id="description"
						/>
					</div>
					<div className="form-group w-100">
						<label htmlFor="weightage">Weightage</label>
						<input
							className="form-control shadow-sm"
							type="number"
							name="weightage"
							id="weightage"
						/>
					</div>
					<div className="form-group w-100">
						<label htmlFor="dueDate">Due Date</label>
						<input
							className="form-control shadow-sm"
							type="date"
							name="dueDate"
							id="dueDate"
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-success">
							Create
						</button>
					</div>
				</form>
				<Link to="/" className="text-decoration-none fixed-bottom">
					<button className="btn btn-dark border-0 rounded-0 w-100">
						<i className="fa fa-home pr-2" />
						Home
					</button>
				</Link>
			</div>
		);
	}
}

export default CreateAssignment;
