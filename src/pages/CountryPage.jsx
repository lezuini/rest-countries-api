import { Link } from "react-router-dom";

import { ReactComponent as ArrowBack } from "../images/arrow-back.svg";

import Transition from "../components/Transition";

const CountryPage = ({ country, data }) => {
  let {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;

  languages = languages
    .map((lang) => {
      return lang.name;
    })
    .join(", ");

  let newBorders = [];

  if (borders) {
    for (let i = 0; i < borders.length; i++) {
      [newBorders[i]] = data.filter(
        (country) => country.alpha3Code === borders[i]
      );
    }
  }

  console.log(country);

  return (
    <Transition>
      <div className="country-page">
        <Link to="/" className="back">
          <button>
            <ArrowBack />
            <p>Back</p>
          </button>
        </Link>
        <div className="country-container">
          <div className="img-container">
            <img src={country.flags.svg} alt={`${country.name} flag`} />
          </div>
          <div className="text-container">
            <h1>{name}</h1>
            <div className="details">
              <div className="part-1">
                <p>
                  <strong>Native Name: </strong>
                  {nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {new Intl.NumberFormat().format(population)}
                </p>
                <p>
                  <strong>Region: </strong>
                  {region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {capital}
                </p>
              </div>
              <div className="part-2">
                <p>
                  <strong>Top Level Domain: </strong>
                  {topLevelDomain[0]}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {currencies && currencies[0].name}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {languages}
                </p>
              </div>
            </div>
            <div className="borders">
              <strong>Border Countries:</strong>
              <div className="container">
                {newBorders.length > 0 ? (
                  newBorders.map((el) => {
                    return (
                      el && (
                        <Link
                          to={`/${el.alpha3Code}`}
                          className="border"
                          key={el.alpha3Code}
                        >
                          <button>{el.name}</button>
                        </Link>
                      )
                    );
                  })
                ) : (
                  <p>None (This country is probably on an island)</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default CountryPage;

// https://github.com/leonardomeza87
