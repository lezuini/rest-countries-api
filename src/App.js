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

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
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
            {data && <Homepage data={data} />}
          </Route>

          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
