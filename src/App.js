import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

// import CountryPage from "./pages/CountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("theme");

  const updateRegion = (region) => {
    console.log(region);
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/region/americas")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.log(error));
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
      <Header changeTheme={changeTheme} />
      <Router basename="/rest-countries-api">
        <Switch>
          <Route exact path="/">
            {data && <Homepage data={data} updateRegion={updateRegion} />}
          </Route>
          {/* {data &&
            data.map((country) => {
              <Route
                exact
                path={`/${country.alpha3Code}`}
                key={country.alpha3Code}
              >
                <CountryPage data={data} name={country.name} />
              </Route>;
            })} */}

          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
