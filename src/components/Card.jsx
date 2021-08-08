const Card = ({ country }) => {
  return (
    <div className="card">
      <div className="flag-container">
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      <div className="text-container">
        <h2>{country.name}</h2>
        <p>
          <strong>Population: </strong>
          {country.population}
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
  );
};

export default Card;
