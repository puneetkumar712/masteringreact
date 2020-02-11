import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MoviesTable extends Component {
  tableColumns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { path: "like" },
    { path: "delete" }
  ];
  constructor(props) {
    super(props);
  }

  render() {
    const {
      movies,
      onHandleLike,
      onDeleteMovies,
      onSort,
      sortColumn
    } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.tableColumns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody
          tableData={movies}
          onHandleLike={onHandleLike}
          onDeleteMovies={onDeleteMovies}
        />
      </table>
    );
  }
}

export default MoviesTable;
