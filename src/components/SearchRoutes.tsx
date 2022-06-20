import { Routes, Route } from "react-router-dom";
import SearchDefault from "../routes";
import SearchInSite from "../routes/site";
import SearchKeywords from "../routes/keyword";
import SearchFileType from "../routes/filetype";
import SearchImage from "../routes/image";
import "./SearchRoutes.css";
import React from "react";

export default function SearchBar(props) {
  return (
    <section className="search-bar">
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
