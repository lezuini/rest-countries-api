import { useEffect, useState } from "react";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Close } from "../images/close-outline.svg";

const SearchBar = ({ filterByQuery }) => {
  const [query, setQuery] = useState("");
  const [block, setBlock] = useState(true);

  const handleChange = (e) => {
    let { value } = e.target;
    if (value === "") {
      setBlock(false);
    }
    setQuery(value);
  };

  const handleDelete = () => {
    setQuery("");
    setBlock(false);
  };
  const handleEnter = (e) => {
    let { key } = e;
    if (key === "Enter" && query) {
      filterByQuery(query);
    }
  };

  //Delay search to prevent renders on every change
  useEffect(() => {
    if (query !== "") {
      const timeout = setTimeout(() => filterByQuery(query), 500);
      return () => clearTimeout(timeout);
    } else if (!block) {
      setBlock(true);
      filterByQuery(query);
    }
  }, [query, filterByQuery]);

  return (
    <div className="search-bar">
      <Search />
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
      {query && <Close className={"close-btn"} onClick={handleDelete} />}
    </div>
  );
};

export default SearchBar;

// https://github.com/leonardomeza87
