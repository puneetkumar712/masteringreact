import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

const Genre = props => {
  const { selectedItem, onSelectItem, items } = props;
  return (
    <ul className="list-group">
      {items.map(genre => (
        <li
          key={genre._id}
          className={
            selectedItem._id === genre._id
              ? "list-group-item active"
              : "list-group-item "
          }
          onClick={() => onSelectItem(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Genre;
