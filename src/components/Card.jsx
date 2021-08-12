import { Link } from "react-router-dom";

const Card = ({ country, scrollUp }) => {
  return (
    <Link to={`/${country.alpha3Code}`} onClick={scrollUp}>
      <div className="card">
        <div className="flag-container">
          <img src={country.flag} alt={`${country.name} flag`} />
        </div>
        <div className="text-container">
          <h2>{country.name}</h2>
          <p>
            <strong>Population: </strong>
            {new Intl.NumberFormat().format(country.population)}
          </p>
          <p>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
