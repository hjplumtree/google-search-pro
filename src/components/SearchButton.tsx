import Open_In_Tab from "../assets/icon-open_in_new_tab.png";
import React from "react";

export default function SearchButton() {
  return (
    <>
      <button type="submit">
        Find In Google
        <img src={Open_In_Tab} alt="Open" />
      </button>
    </>
  );
}
