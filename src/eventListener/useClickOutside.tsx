import React from "react";

const useClickOutside = (callback: () => void) => {
  const ref = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};

export default useClickOutside;