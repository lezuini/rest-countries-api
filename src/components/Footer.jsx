import { ReactComponent as LogoGithub } from "../images/logo-github.svg";
import { ReactComponent as LogoTwitter } from "../images/logo-twitter.svg";

const Footer = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;

// https://github.com/leonardomeza87
