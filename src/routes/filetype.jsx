import { useState } from "react";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";

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
              placeholder="Choose Types"
              onChange={(evt) => setFileType(evt.target.value)}
            />
            <datalist id="file-type">
              <option value="pdf" />
              <option value="ps" />
              <option value="hwp" />
              <option value="html" />
              <option value="xls" />
              <option value="pdf" />
              <option value="doc" />
              <option value="svg" />
            </datalist>
          </label>
        </p>
      </div>
    </form>
  );
}
