import React, { useState, useEffect, lazy } from "react";
import { PlusIcon } from "./iconsComponents/IconComponents";
import TransitionComponent from "./transitions/TransitionComponent";

const chunkLength = 10;

const sliceArrayBySteps = (arr, step) => {
  let index = 0;
  let sliceArr = [];
  while (index < arr.length) {
    sliceArr.push(arr.slice(index, (index += step)));
    index++;
  }
  return sliceArr;
};

const CardsChunk = lazy(() => import("./CardsChunk"));

const Countries = ({ countries }) => {
  const [slicedCountries, setSlicedCountries] = useState(
    sliceArrayBySteps(countries, chunkLength)
  );

  const [countryChunksToRender, setCountryChunksToRender] = useState(1);

  useEffect(() => {
    setSlicedCountries(sliceArrayBySteps(countries, chunkLength));
    setCountryChunksToRender(1);
  }, [countries]);

  if (countries.length === 0) {
    return (
      <div>
        <h3>There are no results for your query</h3>
      </div>
    );
  }

  const countriesToRender = slicedCountries.slice(0, countryChunksToRender);

  return (
    <TransitionComponent>
      <div>
        {countriesToRender.map((countryChunk) => {
          return <CardsChunk key={countryChunk[0]} countries={countryChunk} />;
        })}
      </div>
      <div>
        {slicedCountries[1] && (
          <button
            onClick={() => setCountryChunksToRender(countryChunksToRender + 1)}
          >
            <p>show more results</p>
            <div>
              <PlusIcon width="1.5rem" />
            </div>
          </button>
        )}
      </div>
    </TransitionComponent>
  );
};

export default Countries;
