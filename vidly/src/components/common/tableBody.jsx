import React, { Component } from "react";

class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getData = (item, column) => {
    const columns = column.split(".");
    return columns.reduce((acc, curr) => {
      return acc[curr];
    }, item);
  };

  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return this.getData(item, column.path);
  };

  render() {
    const { tableData, columns } = this.props;
    return (
      <tbody>
        {tableData.map(data => {
          return (
            <tr key={data._id}>
              {columns.map((column, index) => (
                <td key={index}>{this.renderCell(data, column)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
