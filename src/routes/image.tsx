import { useState } from "react";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";
import React from "react";

export default function SearchImage() {
  const [query, setQuery] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  function submitHandler(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    window.open(
      `https://www.google.com/search?q=${query}+imagesize%3A${width}x${height}&tbm=isch`
    );
  }
  return (
    <form onSubmit={(evt) => submitHandler(evt)}>
      <div className="search-bar__basic">
        <label htmlFor="query">
          <SearchBar handleQuery={setQuery} />
        </label>
        <SearchButton />
      </div>
      <div className="search-bar__additional">
        <p>
          <label htmlFor="file-type">
            <input
              name="file-type"
              type="number"
              placeholder="Width"
              onChange={(evt) => setWidth(evt.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="file-type">
            <input
              name="file-type"
              type="number"
              placeholder="Height"
              onChange={(evt) => setHeight(evt.target.value)}
            />
          </label>
        </p>
      </div>
      <div className="search-bar__description">
        <h3>Tip - Image</h3>
        <p>Images of the exact size you want</p>
      </div>
    </form>
  );
}
