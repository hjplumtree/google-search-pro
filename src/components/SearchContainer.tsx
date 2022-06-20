import Navigator from "./Navigator";
import SearchRoutes from "./SearchRoutes";
import "./SearchContainer.css";
import React from "react";

export default function SearchContainer() {
  return (
    <main className="search-container">
      <Navigator />
      <SearchRoutes />
    </main>
  );
}
