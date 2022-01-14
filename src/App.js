import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <SearchContainer />
    </div>
  );
}

function SearchContainer(props) {
  return (
    <section>
      {/* <SearchDefault /> */}
      <SearchInSite />
    </section>
  );
}

function SearchDefault() {
  const [inputValue, setInputValue] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    window.open(`http://google.com/search?q=${inputValue}`);
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        name="search"
        type="text"
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

function SearchInSite() {
  const [query, setQuery] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  function submitHandler(evt) {
    evt.preventDefault();
    window.open(`https://www.google.com/search?q=site%3A${siteUrl}+${query}`);
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
        <label htmlFor="site-url">
          Site Url
          <input
            name="site-url"
            type="text"
            onChange={(evt) => setSiteUrl(evt.target.value)}
          />
        </label>
      </p>
      <input type="submit" value="Search" />
    </form>
  );
}

export default App;

// https://www.google.com/search?q=site%3Anaver.com+%EA%B6%81%EA%B8%88%ED%95%B4
