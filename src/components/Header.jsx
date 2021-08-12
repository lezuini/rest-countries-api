import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "../images/moon.svg";
import { ReactComponent as MoonFilled } from "../images/moon-filled.svg";

const Header = () => {
  const body = document.body;
  const light = "theme--light";
  const dark = "theme--dark";
  const [theme, setTheme] = useState(localStorage.getItem("theme") || light);

  body.classList.add(theme);

  const switchTheme = () => {
    if (theme === dark) {
      body.classList.replace(dark, light);
      localStorage.setItem("theme", light);
      setTheme(light);
    } else {
      body.classList.replace(light, dark);
      localStorage.setItem("theme", dark);
      setTheme(dark);
    }
  };

  return (
    <div className="header">
      <h1>
        <Link to="/">Where in the world?</Link>
      </h1>

      <button onClick={switchTheme}>
        {theme === light ? <Moon /> : <MoonFilled />}
        {theme === light ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Header;
