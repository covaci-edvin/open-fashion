"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const isWindow = typeof window !== "undefined";

  const [screenSize, setScreenSize] = useState(() => ({
    width: isWindow ? window.innerWidth : 0,
    height: isWindow ? window.innerHeight : 0,
  }));

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: isWindow ? window.innerWidth : 0,
        height: isWindow ? window.innerHeight : 0,
      });
    };

    if (isWindow) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isWindow]);

  return screenSize;
};

export default useScreenSize;
