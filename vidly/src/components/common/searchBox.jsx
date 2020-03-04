import Input from "./input";
import React from 'react'


const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      name="searchBox"
      placeholder="Search ..."
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
    />
  );
};

export default SearchBox;
