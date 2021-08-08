import { useEffect, useState, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import CountryPage from "./pages/CountryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <Header />
      <Router basename="/rest-countries-api">
        <Switch>
          <Route exact path="/">
            {data && <Homepage data={data} />}
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
