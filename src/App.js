import "./App.css";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Logo from "./components/Logo";
import SearchContainer from "./components/SearchContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Logo />
        <Header />
        <SearchContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
