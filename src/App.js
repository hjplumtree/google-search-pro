import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import SearchDefault from "./routes";
import SearchInSite from "./routes/site";
import SearchKeywords from "./routes/keyword";
import SearchFileType from "./routes/filetype";
import SearchImage from "./routes/image";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigator />
        <SearchContainer />
      </div>
    </BrowserRouter>
  );
}

function SearchContainer(props) {
  return (
    <section>
      <Routes>
        <Route path="/" element={<SearchDefault />} />
        <Route path="keyword" element={<SearchKeywords />} />
        <Route path="site" element={<SearchInSite />} />
        <Route path="filetype" element={<SearchFileType />} />
        <Route path="image" element={<SearchImage />} />
      </Routes>
    </section>
  );
}

function Navigator() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Default</Link>
        </li>
        <li>
          <Link to="/keyword">Keywords</Link>
        </li>
        <li>
          <Link to="/site">In site</Link>
        </li>
        <li>
          <Link to="/filetype">File type</Link>
        </li>
        <li>
          <Link to="/image">Image</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
