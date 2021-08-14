import { useCallback, useEffect, useRef, useState } from "react";

const Loader = ({ increaseChunks, condition }) => {
  const [counter, setCounter] = useState(true);
  const loader = useRef(null);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        if (counter === true) {
          setCounter(false);
          setTimeout(() => {
            increaseChunks();
            setCounter(true);
          }, 10);
        }
      }
    },
    [counter, increaseChunks]
  );

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    let observer = new IntersectionObserver(handleObserver, options);

    if (loader.current) observer.observe(loader.current);
  }, [counter, condition]);

  return (
    <>
      {/* This is important */}
      {condition && counter && <div className="loader" ref={loader}></div>}
    </>
  );
};

export default Loader;

// https://github.com/leonardomeza87
