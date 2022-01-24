import { useState } from "react";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";

export default function SearchInSite() {
  const [query, setQuery] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  function submitHandler(evt) {
    evt.preventDefault();
    window.open(`https://www.google.com/search?q=site%3A${siteUrl}+${query}`);
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
          <label htmlFor="site-url">
            <input
              name="site-url"
              type="text"
              placeholder="URL"
              onChange={(evt) => setSiteUrl(evt.target.value)}
            />
          </label>
        </p>
      </div>
    </form>
  );
}
