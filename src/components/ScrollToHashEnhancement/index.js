import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHashElement scrolls to the element with an id matching the URL hash.
 */
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the "#" from the hash to get the id
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

export default ScrollToHashElement;
