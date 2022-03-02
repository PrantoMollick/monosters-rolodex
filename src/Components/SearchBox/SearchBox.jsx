import React from "react";

import './SearchBox.css';


export const SearchBox = ({placeholder, onChange}) => {
  return <input
    className="search"
    type="text"
    placeholder={placeholder}
    onChange={onChange}
  />
};   