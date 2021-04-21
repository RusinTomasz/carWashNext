import { useLayoutEffect, useState } from "react";
import { debounce } from "lodash";

const useWindowSize = () => {
  const [size, setSize] = useState({ windowWidth: 0, windowHeight: 0 });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }
    window.addEventListener("resize", debounce(updateSize, 100));
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export default useWindowSize;
