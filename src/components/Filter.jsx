import { useState, useEffect } from "react";

import { ReactComponent as Chevron } from "../images/chevron-down.svg";

const Filter = ({ updateRegion }) => {
  const [selected, setSelected] = useState(false);
  const [region, setRegion] = useState("Filter by Region");

  const handleClick = () => {
    setSelected(!selected);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSelected(false);
    }, 100);
  };

  useEffect(() => {
    updateRegion(region);
  }, [region, updateRegion]);

  return (
    <div className="filter">
      <button
        onClick={handleClick}
        onBlur={handleBlur}
        className={selected ? "unfolded" : ""}
      >
        {region} <Chevron />
      </button>
      <div className={selected ? "options selected" : "options"}>
        <div
          className="option"
          onClick={() => {
            setRegion("All");
          }}
        >
          All
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("Africa");
          }}
        >
          Africa
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("Americas");
          }}
        >
          Americas
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("Asia");
          }}
        >
          Asia
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("Europe");
          }}
        >
          Europe
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("Oceania");
          }}
        >
          Oceania
        </div>
        <div
          className="option"
          onClick={() => {
            setRegion("Polar");
          }}
        >
          Polar
        </div>
      </div>
    </div>
  );
};

export default Filter;
