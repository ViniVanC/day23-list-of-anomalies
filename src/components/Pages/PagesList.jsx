import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PagesList.scss";

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
    <div className="pages-list">
      <h1>Список аномалій:</h1>
      <ul className="pages-list__list">
        {pages?.slice(1).map((page) => (
          <li className="pages-list__item" key={page.value.id}>
            <Link className="pages-list__link" to={`/pages/${page.value.id}`}>
              <b>Object #</b> {page.value.properties.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
