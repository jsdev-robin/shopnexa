import { useEffect, useState, useRef } from "react";

const useElementPosition = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setPosition({ x: rect.left, y: rect.top });
      }
    };

    const observer = new ResizeObserver(updatePosition);
    if (elementRef.current) observer.observe(elementRef.current);

    window.addEventListener("scroll", updatePosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return { elementRef, position };
};

export default useElementPosition;
