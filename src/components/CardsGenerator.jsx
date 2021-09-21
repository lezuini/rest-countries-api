import { useCallback, useEffect, useState } from "react";

import Card from "./Card";

const chunkLength = 8;

//Cut an array into pieces of defined length
const slice = (array, length) => {
  let index = 0;
  let slicedArray = [];

  for (let i = 0; i < array.length / length; i++) {
    slicedArray.push(array.slice(index, index + length));
    index += length;
  }
  return slicedArray;
};

const CardsGenerator = ({
  countries,
  increaseChunk,
  setCondition,
  scrollUp,
}) => {
  const [slicedCountries, setSlicedCountries] = useState(
    slice(countries, chunkLength)
  );
  const [chunks, setChunks] = useState(1);

  const handleChunk = useCallback(() => {
    setChunks(chunks + 1);
  }, [chunks]);

  useEffect(() => {
    setCondition(chunks < countries.length / chunkLength);
  }, [countries, setCondition, chunks]);

  useEffect(() => {
    handleChunk();
  }, [increaseChunk]);

  useEffect(() => {
    setSlicedCountries(slice(countries, chunkLength));
    setChunks(1);
  }, [countries]);

  const cardsToRender = [];

  slicedCountries.slice(0, chunks).forEach((arr) => {
    cardsToRender.push(...arr);
  });

  return (
    <div className="countries-container">
      {!countries ? (
        <h2>Nothing to see here</h2>
      ) : (
        cardsToRender.map((country) => {
          return (
            <Card country={country} key={country.name} scrollUp={scrollUp} />
          );
        })
      )}
    </div>
  );
};

export default CardsGenerator;

// https://github.com/leonardomeza87
