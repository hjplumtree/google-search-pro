import React from "react";

interface SearchBarProps {
  handleQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ handleQuery }: SearchBarProps) {
  return (
    <input
      autoFocus
      required
      name="search"
      type="text"
      placeholder="Search"
      onChange={(evt) => handleQuery(evt.target.value)}
    />
  );
}
