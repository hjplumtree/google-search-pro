import { useState } from "react";

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
      <label htmlFor="query">
        <input
          name="query"
          type="text"
          placeholder="Search"
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </label>
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
      <input type="submit" value="Search" />
    </form>
  );
}
