import React from "react";
import { Container } from "../Container";
import { Logo } from "../Logo/Logo";
import { List } from "../List/List";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";
import "./Header.scss";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo />
          <List
            className={"navbar"}
            itemsList={[
              {
                title: "home",
                href: "/",
              },
            ]}
          />
          <button className="theme-btn" onClick={setTheme}>
            {theme ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </Container>
    </header>
  );
};
