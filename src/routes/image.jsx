import { useState } from "react";

export default function SearchImage() {
  const [query, setQuery] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  function submitHandler(evt) {
    evt.preventDefault();
    window.open(
      `https://www.google.com/search?q=${query}+imagesize%3A${width}x${height}&tbm=isch`,
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
          Width
          <input
            name="file-type"
            type="number"
            onChange={(evt) => setWidth(evt.target.value)}
          />
        </label>
      </p>
      <p>
        <label htmlFor="file-type">
          Height
          <input
            name="file-type"
            type="number"
            onChange={(evt) => setHeight(evt.target.value)}
          />
        </label>
      </p>
      <input type="submit" value="Search" />
    </form>
  );
}
