import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import CountryPage from "./pages/CountryPage";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("theme");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  const changeTheme = () => {
    if (theme === "theme") {
      setTheme("theme--dark");
    } else {
      setTheme("theme");
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Router basename="/rest-countries-api">
        <Header changeTheme={changeTheme} />
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
