import React from "react";
import { Container } from "../Container";
import { Logo } from "../Logo/Logo";
import { List } from "../List/List";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo />
          <List
            itemsList={[
              {
                title: "home",
                href: "/",
              },
            ]}
          />
        </div>
      </Container>
    </header>
  );
};
