import { useState, useEffect, useCallback } from "react";
// import { screenConstant } from "./mediaQuery";

const PageDimensions = () => {
  const hasWindow = window && typeof window !== "undefined";

  const getDimensions = useCallback(() => {
    const width = hasWindow ? window.screen.width : null;
    const height = hasWindow ? window.screen.height : null;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [dimensions, setDimensions] = useState(getDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setDimensions(getDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow, getDimensions]);

  const { width, height } = dimensions;

  return { width, height };
};

export default PageDimensions;
