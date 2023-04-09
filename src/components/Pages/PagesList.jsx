import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const databaseId = "4b04583f3eb641f3bf11d32bbf830948";

export const PagesList = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function fetchPages() {
      const response = await fetch(
        `https://notion-api.splitbee.io/v1/page/${databaseId}`
      );

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      const database = await response.json();
      setPages(Object.values(database));
    }

    fetchPages();
  }, []);

  return (
    <div>
      <h1>Pages List</h1>
      <ul>
        {pages?.slice(1).map((page) => (
          <li key={page.value.id}>
            <Link to={`/pages/${page.value.id}`}>
              {page.value.properties.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
