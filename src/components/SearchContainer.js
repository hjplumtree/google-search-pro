import { Navigator } from "./Navigator";
import { SearchBar } from "./SearchBar";
import "./SearchContainer.css";

export default function SearchContainer() {
  return (
    <main className="search-container">
      <Navigator />
      <SearchBar />
    </main>
  );
}
