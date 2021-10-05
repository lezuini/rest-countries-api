import { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import CountryPage from "./pages/CountryPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

localStorage.removeItem("region");
localStorage.removeItem("countries");

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((json) => {
        if (json.message) {
          // In case there are additional problems
          throw new Error(json.message);
        } else {
          setData(json);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        {!loading ? (
          <Switch>
            <Route exact path="/">
              {!error ? (
                data && <Homepage data={data} />
              ) : (
                <ErrorPage error={error} />
              )}
            </Route>
            {data &&
              data.map((country) => {
                return (
                  <Route
                    exact
                    path={`/${country.alpha3Code}`}
                    key={country.alpha3Code}
                  >
                    <CountryPage country={country} data={data} />
                  </Route>
                );
              })}
            <Route exact path="/:code">
              <ErrorPage error={error} />
            </Route>
          </Switch>
        ) : (
          <div className="loader-cont">
            <div className="loader-animation"></div>
          </div>
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;

// https://github.com/leonardomeza87
