import { useLayoutEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const listener = (event: MediaQueryListEvent) => {
    setIsDarkMode(event.matches);
  };

  useLayoutEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
};

export default useDarkMode;
