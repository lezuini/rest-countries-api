import Card from "../components/Card";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

const Homepage = ({ data, updateRegion }) => {
  return (
    <div className="home">
      <div className="utilities">
        <SearchBar />
        <Filter updateRegion={updateRegion} />
      </div>
      <div className="countries-container">
        {data.map((country) => {
          return <Card country={country} key={country.name} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
