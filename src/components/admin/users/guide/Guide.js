import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Guide extends Component {
  render() {
    return (
      <div className="guide container">
        <br />
        <div
          className="bg-light p-2 px-3 text-center shadow-sm rounded font-weight-bold"
          style={{ color: "#5b9ecf", fontSize: "1.1em" }}
        >
          Guide Section - List of guides
        </div>
        <br />
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Group Numbers</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>Jill Shah</td>
              <td>1,2</td>
              <td>IT</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Shreya S</td>
              <td>11,12</td>
              <td>MECH</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jack Shah</td>
              <td>10,20</td>
              <td>ETRX</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nishavak Naik</td>
              <td>3,4</td>
              <td>COMP</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Atharva Kitkaru</td>
              <td>5,6</td>
              <td>EXTC</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Jill Shah</td>
              <td>1,2</td>
              <td>IT</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Shreya S</td>
              <td>11,12</td>
              <td>MECH</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jack Shah</td>
              <td>10,20</td>
              <td>ETRX</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nishavak Naik</td>
              <td>3,4</td>
              <td>COMP</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Atharva Kitkaru</td>
              <td>5,6</td>
              <td>EXTC</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Jill Shah</td>
              <td>1,2</td>
              <td>IT</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Shreya S</td>
              <td>11,12</td>
              <td>MECH</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jack Shah</td>
              <td>10,20</td>
              <td>ETRX</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Nishavak Naik</td>
              <td>3,4</td>
              <td>COMP</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Atharva Kitkaru</td>
              <td>5,6</td>
              <td>EXTC</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Guide;
