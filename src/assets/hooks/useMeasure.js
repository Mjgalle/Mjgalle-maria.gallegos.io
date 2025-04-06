import { useState, useEffect, useRef, useCallback } from "react";

function useMeasure() {
  const ref = useRef(null);
  const [bounds, setBounds] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  const updateBounds = useCallback(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setBounds({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
      });
    }
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(updateBounds);
    if (ref.current) observer.observe(ref.current);
    window.addEventListener("resize", updateBounds);
    window.addEventListener("scroll", updateBounds, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds);
    };
  }, [updateBounds]);

  return [ref, bounds];
}

export default useMeasure;
