import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "../images/moon.svg";
// import { ReactComponent as MoonFilled } from "../images/moon-filled.svg";

const Header = ({ changeTheme }) => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Where in the world?</Link>
      </h1>

      <button onClick={changeTheme}>
        <Moon /> Dark Mode
      </button>
    </div>
  );
};

export default Header;
