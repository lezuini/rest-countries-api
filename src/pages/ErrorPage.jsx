import { Link, useParams } from "react-router-dom";

import Transition from "../components/Transition";

import { ReactComponent as ArrowBack } from "../images/arrow-back.svg";

const ErrorPage = ({ error }) => {
  const { code } = useParams();

  return (
    <Transition>
      <div className="error-page">
        <div className={error ? "container error" : "container"}>
          {!error && (
            <Link to="/" className="back">
              <button>
                <ArrowBack />
                <p>Back</p>
              </button>
            </Link>
          )}

          {error ? (
            <h1>
              A communication error has occurred with the API, check your
              internet
            </h1>
          ) : (
            <h1>
              No results for the country code: <span>{code.toUpperCase()}</span>
            </h1>
          )}

          {error && (
            <a href="/rest-countries-api/" className="retry">
              <button>Retry</button>
            </a>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default ErrorPage;

// https://github.com/leonardomeza87
