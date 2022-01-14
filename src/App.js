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
      <SearchKeywords />
      {/* <SearchDefault /> */}
      {/* <SearchInSite /> */}
      {/* <SearchFileType /> */}
      {/* <SearchImage /> */}
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

function SearchKeywords() {
  const [queries, setQueries] = useState([{ id: 1, q: "" }]);

  function submitHandler(evt) {
    evt.preventDefault();

    let query = "";
    if (queries.length > 1) {
      query = queries
        .reduce((acc, cur) => {
          return acc + `%2B"${cur.q}"`;
        }, "")
        .slice(3);
    } else {
      query = `"${queries[0].q}"`;
    }
    console.log(query);
    window.open(`https://www.google.com/search?q=${query}`);
  }

  function handleChange(evt) {
    const { value } = evt.target;
    const name = Number(evt.target.name);
    const newQueries = [...queries];
    for (let i = 0; i < newQueries.length; i++) {
      const query = newQueries[i];
      if (query.id === name) {
        query.q = value;
      }
    }
    setQueries(newQueries);
  }

  function handleClick(evt) {
    evt.preventDefault();
    const newId = queries.length + 1;
    const newQueries = [...queries, { id: newId, q: "", delete: true }];
    setQueries(newQueries);
  }

  function handleDelete(id) {
    const newQueries = queries.filter((el) => el.id !== id);
    setQueries(newQueries);
  }
  return (
    <form onSubmit={submitHandler}>
      {queries.map((el) => {
        return (
          <p key={el.id}>
            <label>
              Keyword Search
              <input name={el.id} type="text" onChange={handleChange} />
            </label>
            {el.delete && (
              <button onClick={() => handleDelete(el.id)}>X</button>
            )}
          </p>
        );
      })}

      <input
        disabled={queries.length === 2 && true}
        type="button"
        value="Add Keyword"
        onClick={handleClick}
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

function SearchFileType() {
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

function SearchImage() {
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

export default App;
