import { useState } from "react";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";
import React from "react";

export default function SearchFileType() {
  const [query, setQuery] = useState("");
  const [fileType, setFileType] = useState("");
  function submitHandler(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    window.open(
      `https://www.google.com/search?q=filetype%3A${fileType}+${query}`
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
              type="text"
              list="file-type"
              placeholder="Choose File Type"
              onChange={(evt) => setFileType(evt.target.value)}
            />
            <datalist id="file-type">
              <option value="pdf" />
              <option value="ps" />
              <option value="hwp" />
              <option value="html" />
              <option value="xls" />
              <option value="doc" />
              <option value="svg" />
            </datalist>
          </label>
        </p>
      </div>
      <div className="search-bar__description">
        <h3>Tip - File Type</h3>
        <p>Find the file type you want</p>
      </div>
    </form>
  );
}
