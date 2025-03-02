/* eslint-disable react/prop-types */
import { Component } from "react";

export class AdopterData extends Component {
  render() {
    const renderedData = this.props.data;
    const formFunc = this.props.func;

    function backHandler() {
      formFunc(true);
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Adptor Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {renderedData.map((x) => {
              return <TableDat key={x.length} data={x} />;
            })}
          </tbody>
        </table>

        <button style={{ width: 200, cursor: "pointer" }} onClick={backHandler}>
          Go back
        </button>
      </div>
    );
  }
}

function TableDat({ data }) {
  return (
    <tr>
      <td>{data.petName}</td>
      <td>{data.petType}</td>
      <td>{data.breed}</td>
      <td>{data.personName}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
  );
}

export default AdopterData;
