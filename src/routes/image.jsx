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
      <input type="submit" value="Search" />
    </form>
  );
}
