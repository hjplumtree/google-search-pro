import { useState } from "react";
import SearchButton from "../components/SearchButton";
import React from "react";

interface Ielement {
  id: string;
  q: string;
  delete?: boolean;
}

export default function SearchKeywords() {
  const [queries, setQueries] = useState([{ id: "1", q: "" }]);

  function submitHandler(evt: React.FormEvent<HTMLFormElement>) {
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

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target;
    const name = evt.target.name;
    const newQueries = [...queries];
    for (let i = 0; i < newQueries.length; i++) {
      const query = newQueries[i];
      if (query.id === name) {
        query.q = value;
      }
    }
    setQueries(newQueries);
  }

  function handleClick(evt: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    evt.preventDefault();
    const newId = queries.length + 1;
    const newQueries = [...queries, { id: String(newId), q: "", delete: true }];
    setQueries(newQueries);
  }

  function handleDelete(id: string) {
    const newQueries = queries.filter((el) => el.id !== id);
    setQueries(newQueries);
  }
  return (
    <form onSubmit={(evt) => submitHandler(evt)}>
      {queries.map((el: Ielement) => {
        return (
          <p className="search-bar__basic" key={el.id}>
            <label className="search-bar__keyword">
              <input
                autoFocus
                required
                name={el.id}
                type="text"
                placeholder={"Keyword " + el.id}
                onChange={(evt) => handleChange(evt)}
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
          </p>
        );
      })}

      <div className="search-bar__additional">
        <input
          className="search-bar__add-keyword"
          disabled={queries.length === 2 && true}
          type="button"
          value="Add Keyword"
          onClick={(evt) => handleClick(evt)}
        />
      </div>

      <div className="search-bar__description">
        <h3>Tip - keyword</h3>
        <p>Result have an exact keyword or 2</p>
      </div>
    </form>
  );
}
