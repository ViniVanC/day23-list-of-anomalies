import React from "react";

export const Logo = () => {
  return (
    <div
      className="logo"
      onClick={() => {
        document.documentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
