import { useCallback, useEffect, useState } from "react";
import CardsGenerator from "../components/CardsGenerator";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Transition from "../components/Transition";

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const Homepage = ({ data }) => {
  const [countries, setCountries] = useState(
    localStorage.getItem("countries")
      ? JSON.parse(localStorage.getItem("countries"))
      : data
  );
  const [region, setRegion] = useState(
    localStorage.getItem("region") || "Filter by Region"
  );
  const [updater, setUpdater] = useState(0);
  const [condition, setCondition] = useState(true);

  useEffect(() => {
    scrollUp();
  }, []);

  const updateRegion = useCallback((re) => {
    setRegion(re);
    localStorage.setItem("region", re);
    setUpdater(0);
  }, []);

  const filterByQuery = (query) => {
    query = query
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let filteredData = data.filter((country) =>
      country.name.toLowerCase().includes(query)
    );
    setCountries(filteredData);
  };

  useEffect(() => {
    if (region === "Filter by Region") {
      return false;
    } else if (region === "All") {
      setCountries(data);
    } else {
      let newData = data.filter((a) => a.region === region);
      setCountries(newData);
      localStorage.setItem("countries", JSON.stringify(newData));
    }
  }, [region, data]);

  const increaseChunks = () => {
    setUpdater(Date.now());
  };

  return (
    <Transition>
      <div className="home">
        <div className="utilities">
          <SearchBar filterByQuery={filterByQuery} />
          <Filter updateRegion={updateRegion} />
        </div>
        {countries.length ? (
          <>
            <CardsGenerator
              countries={countries}
              increaseChunk={updater}
              setCondition={setCondition}
              scrollUp={scrollUp}
            />
            <Loader increaseChunks={increaseChunks} condition={condition} />
          </>
        ) : (
          <h1 className="empty-result">There is no result for your search</h1>
        )}
      </div>
    </Transition>
  );
};

export default Homepage;

// https://github.com/leonardomeza87
