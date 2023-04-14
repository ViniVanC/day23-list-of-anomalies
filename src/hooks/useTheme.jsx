import { useReducer } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useReducer((t) => !t, true);

  if (theme) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  return { theme, setTheme };
};
