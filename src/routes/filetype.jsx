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
        Search
        <input
          name="query"
          type="text"
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </label>
      <p>
        <label htmlFor="file-type">
          File Type
          <input
            name="file-type"
            type="text"
            onChange={(evt) => setFileType(evt.target.value)}
          />
          <p>Types: pdf, ps, hwp, html, xls, ppt, doc, svg ...</p>
        </label>
      </p>
      <input type="submit" value="Search" />
    </form>
  );
}
