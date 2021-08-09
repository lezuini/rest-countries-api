import { ReactComponent as Moon } from "../images/moon.svg";
import { ReactComponent as LogoGithub } from "../images/logo-github.svg";
import { ReactComponent as LogoTwitter } from "../images/logo-twitter.svg";

const Header = ({ changeTheme }) => {
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <div className="social">
        <a
          href="https://twitter.com/leonardomeza87"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoTwitter />
        </a>
        <a
          href="https://github.com/leonardomeza87/rest-countries-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoGithub />
        </a>
      </div>
      <button onClick={changeTheme}>
        <Moon /> Dark Mode
      </button>
    </div>
  );
};

export default Header;
