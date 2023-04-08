import React from "react";
import { Container } from "../Container";
import { Logo } from "../Logo";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo />
        </div>
      </Container>
    </header>
  );
};
