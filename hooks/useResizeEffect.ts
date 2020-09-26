import { useEffect } from "react";

const useResizeEffect = (onResize, deps = []) => {
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [...deps, onResize]);
};

export default useResizeEffect;
