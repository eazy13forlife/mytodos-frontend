import { useEffect } from "react";

const useCloseOptions = (projectUpdateOptionsRef, closeOptions) => {
  useEffect(() => {
    const renderOptions = (e) => {
      if (
        projectUpdateOptionsRef.current &&
        !projectUpdateOptionsRef.current.contains(e.target)
      ) {
        closeOptions();
      }
    };

    window.addEventListener("click", renderOptions);

    return () => {
      window.removeEventListener("click", renderOptions);
    };
  }, []);
};

export default useCloseOptions;
