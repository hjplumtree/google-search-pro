import { useState } from "react";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";

export default function SearchDefault() {
  const [query, setQuery] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    window.open(`http://google.com/search?q=${query}`);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="search-bar__basic">
        <SearchBar handleQuery={setQuery} />
        <SearchButton />
      </div>
      <div className="search-bar__description">
        <h3>Tip - default</h3>
        <p>It's Google</p>
      </div>
    </form>
  );
}
