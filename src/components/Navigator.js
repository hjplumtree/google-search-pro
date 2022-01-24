import { NavLink } from "react-router-dom";
import "./Navigator.css";

export function Navigator() {
  function handleActive({ isActive }) {
    if (isActive) {
      return "active";
    }
  }
  return (
    <nav className="navi">
      <ul>
        <li>
          <NavLink className={handleActive} to="/">
            Default
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/keyword">
            Keyword
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/site">
            In Site
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/filetype">
            File Type
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/image">
            Image
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
