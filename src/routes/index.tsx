import { useState } from "react";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";
import React from "react";

export default function SearchDefault() {
  const [query, setQuery] = useState("");

  function submitHandler(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    window.open(`http://google.com/search?q=${query}`);
  }
  return (
    <form onSubmit={(evt) => submitHandler(evt)}>
      <div className="search-bar__basic">
        <SearchBar handleQuery={setQuery} />
        <SearchButton />
      </div>
      <div className="search-bar__description">
        <h3>Tip - default</h3>
        <p>It's Google</p>
      </div>
    </form>
  );
}
