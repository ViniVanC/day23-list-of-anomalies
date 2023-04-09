import React from "react";
import { Link } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import { Intro } from "../../sections/Intro/Intro";
import "./PagesList.scss";

export const PagesList = () => {
  const { pages } = usePages();

  return (
    <>
      <Intro />
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
    </>
  );
};
