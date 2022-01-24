import { useState } from "react";

export default function SearchInSite() {
  const [query, setQuery] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  function submitHandler(evt) {
    evt.preventDefault();
    window.open(`https://www.google.com/search?q=site%3A${siteUrl}+${query}`);
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
        <label htmlFor="site-url">
          <input
            name="site-url"
            type="text"
            placeholder="URL"
            onChange={(evt) => setSiteUrl(evt.target.value)}
          />
        </label>
      </p>
      <input type="submit" value="Search" />
    </form>
  );
}
