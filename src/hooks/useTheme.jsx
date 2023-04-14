import { useEffect, useReducer } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useReducer(
    (t) => !t,
    JSON.parse(localStorage.getItem("day23-user-theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("day23-user-theme", JSON.stringify(theme));
  }, [theme]);

  if (theme) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  return { theme, setTheme };
};
