import React, { createContext, useContext, useEffect, useState } from "react";

const PagesContext = createContext();
export const usePages = () => useContext(PagesContext);

const pageId = "4b04583f3eb641f3bf11d32bbf830948";

export const PagesProvider = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchPages() {
      const response = await fetch(
        `https://notion-api.splitbee.io/v1/page/${pageId}`
      );

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      const page = await response.json();
      setPages(Object.values(page));
    }

    fetchPages();
  }, []);

  return (
    <PagesContext.Provider value={{ pages, search, setSearch }}>
      {children}
    </PagesContext.Provider>
  );
};
