import { useState } from "react";

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
              <input
                name={el.id}
                type="text"
                placeholder="Keyword Search"
                onChange={handleChange}
              />
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
