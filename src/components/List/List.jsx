import React from "react";
import { Link } from "react-router-dom";

export const List = ({ className, itemsList }) => {
  return (
    <nav className={`itemsList ${className}`}>
      <ul className={`itemsList__list ${className}__list`}>
        {itemsList?.map((item) => (
          <li key={item.title} className={`itemsList__item ${className}__item`}>
            <Link
              className={`itemsList__link ${className}__link`}
              to={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
