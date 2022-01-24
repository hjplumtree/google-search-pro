import { useState } from "react";
import SearchButton from "../components/SearchButton";

export default function SearchFileType() {
  const [query, setQuery] = useState("");
  const [fileType, setFileType] = useState("");
  function submitHandler(evt) {
    evt.preventDefault();
    window.open(
      `https://www.google.com/search?q=filetype%3A${fileType}+${query}`,
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="search-bar__basic">
        <label htmlFor="query">
          <input
            autoFocus
            name="query"
            type="text"
            placeholder="Search"
            onChange={(evt) => setQuery(evt.target.value)}
          />
        </label>
        <SearchButton />
      </div>
      <div className="search-bar__additional">
        <p>
          <label htmlFor="file-type">
            <input
              name="file-type"
              type="text"
              placeholder="Types: pdf, ps, hwp, html, xls, ppt, doc, svg ..."
              onChange={(evt) => setFileType(evt.target.value)}
            />
          </label>
        </p>
      </div>
    </form>
  );
}
