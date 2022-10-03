import { useEffect, useState } from "react";

/**
 * ref의 client width, height 값을 가져오는 hook...
 *
 * @param {import("react").RefObject<HTMLElement>} ref
 */
export const useClientWidthHeight = (ref) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const setClientWidthHeight = () => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
      }
    };
    setClientWidthHeight();

    window.addEventListener("resize", setClientWidthHeight);

    return () => {
      window.addEventListener("resize", setClientWidthHeight);
    };
  }, []);

  const clientRects = { width, height };

  return clientRects;
};
