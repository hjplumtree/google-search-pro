import Navigator from "./Navigator";
import SearchRoutes from "./SearchRoutes";
import "./SearchContainer.css";

export default function SearchContainer() {
  return (
    <main className="search-container">
      <Navigator />
      <SearchRoutes />
    </main>
  );
}
