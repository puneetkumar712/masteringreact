import React, { Component } from "react";

class TableHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.path} onClick={() => this.raiseSort(column.path)}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  raiseSort = path => {
    let { sortColumn, onSort } = this.props;
    sortColumn = { ...sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn = { path, order: "asc" };
    }
    onSort(sortColumn);
  };
}

export default TableHeader;
