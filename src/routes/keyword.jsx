import { useState } from "react";
import SearchButton from "../components/SearchButton";

export default function SearchKeywords() {
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
          <p className="search-bar__basic" key={el.id}>
            {/* <div className="search-bar__basic"> */}
            <label className="search-bar__keyword">
              <input
                autoFocus
                name={el.id}
                type="text"
                placeholder={"Keyword " + el.id}
                onChange={handleChange}
              />
            </label>
            {!el.delete && <SearchButton />}

            {el.delete && (
              <button
                className="search-bar__delete"
                onClick={() => handleDelete(el.id)}
              >
                X
              </button>
            )}
            {/* </div> */}
          </p>
        );
      })}

      <div className="search-bar__additional">
        <input
          className="search-bar__add-keyword"
          disabled={queries.length === 2 && true}
          type="button"
          value="Add Keyword"
          onClick={handleClick}
        />
      </div>
    </form>
  );
}
