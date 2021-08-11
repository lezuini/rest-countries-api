import { useEffect, useState } from "react";
import { ReactComponent as Search } from "../images/search.svg";

const SearchBar = ({ filterByQuery }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    setQuery(value);
  };

  //Delay search to prevent renders on every change
  useEffect(() => {
    const timeout = setTimeout(() => filterByQuery(query), 500);
    return () => clearTimeout(timeout);
  }, [query, filterByQuery]);

  return (
    <div className="search-bar">
      <Search />
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
