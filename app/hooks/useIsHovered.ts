import { RefObject, useEffect, useState } from "react";

const useIsHovered = (elementRef: RefObject<HTMLElement>) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => {
      setIsHovered(true);
    };

    const handleMouseOut = () => {
      setIsHovered(false);
    };

    const element = elementRef.current;

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, [elementRef]);

  return isHovered;
};

export default useIsHovered;
