import React, { useEffect } from "react";

const useCloseComponentOffClick = (ref, closeComponent) => {
  useEffect(() => {
    const renderComponent = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeComponent();
      }
    };
    window.document.addEventListener("click", renderComponent);

    return () => {
      window.document.removeEventListener("click", renderComponent);
    };
  }, []);
};

export default useCloseComponentOffClick;
