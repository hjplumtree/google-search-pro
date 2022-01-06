import "./App.css";
import { useState } from "react";
import axios from "axios";

const API_KEY = process.env.API_KEY;
const ENGINE = process.env.ENGINE;

function App() {
  function submitHandler(_search) {
    setSearch(_search);
  }
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <SearchBar onSubmit={submitHandler} />
      <Result search={search} />
    </div>
  );
}

function SearchBar(props) {
  const [inputValue, setInputValue] = useState("");

  function submitHandler(evt) {
    evt.preventDefault();
    props.onSubmit(inputValue);
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

function Result(props) {
  const search = props.search;
  let data = [];
  if (search) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE}&q=${search}`;
    axios.get(url).then((res) => console.log(res.data.items));
  }

  return <div>results</div>;
}

export default App;
