import "./App.css";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import Logo from "./components/Logo";
import SearchContainer from "./components/SearchContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Logo />
        <Header />
        <SearchContainer />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
