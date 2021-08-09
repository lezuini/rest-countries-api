import { useState } from "react";
import { ReactComponent as Search } from "../images/search.svg";

const SearchBar = () => {
  const [entry, setEntry] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    setEntry(value);
  };

  return (
    <div className="search-bar">
      <Search />
      <input
        type="text"
        placeholder="Search for a country..."
        value={entry}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
