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

export default App;
