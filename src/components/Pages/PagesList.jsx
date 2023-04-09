import React from "react";
import { Link } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import { Intro } from "../../sections/Intro/Intro";
import "./PagesList.scss";

export const PagesList = () => {
  const { pages, search, setSearch } = usePages();

  return (
    <>
      <Intro />
      <div className="pages-list">
        <div className="pages-list__header">
          <h1>Список аномалій:</h1>
          <div className="pages-list__search-box">
            <input
              type="text"
              placeholder="Шукайте по номеру"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="xMark" onClick={() => setSearch("")}>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <ul className="pages-list__list">
          {pages
            ?.slice(1)
            .filter((item) =>
              item.value.properties.title[0][0].includes(search.toString())
            )
            .map((page) => (
              <li className="pages-list__item" key={page.value.id}>
                <Link
                  className="pages-list__link"
                  to={`/pages/${page.value.id}`}
                >
                  <b>Object #</b> {page.value.properties.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
