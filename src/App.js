import "./App.css";
import "./reset.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <SearchContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
