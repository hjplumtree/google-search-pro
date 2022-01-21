import { Link } from "react-router-dom";
import "./Navigator.css";

export function Navigator() {
  return (
    <nav className="navi">
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
