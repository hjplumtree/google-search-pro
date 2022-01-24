import "./App.css";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Logo from "./components/Logo";
import SearchContainer from "./components/SearchContainer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Logo />
        <SearchContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
