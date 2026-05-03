import { Link } from "@tanstack/react-router";
import Button from "components/Input/Button";
import type React from "react";

import type { HeaderProps } from "./Header.types";
import { Icon } from "../Icon/Icon";

const Header: React.FC<HeaderProps> = ({ Links, onLogout }) => (
  <div className="flex items-center justify-between flex-row gap-2 h-14 pr-4 pl-5">
    <div style={{ display: "flex", alignItems: "center", columnGap: "0.5rem" }}>
      <p
        style={{
          minWidth: "60px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        logo
      </p>
      {Links.map((link: { to: string; label: string }, index: number) => (
        <Link key={index} to={link.to} className="nav-link">
          {link.label}
        </Link>
      ))}
    </div>

    <Icon
      name="UserCircled"
      width={22}
      height={22}
      fill="white"
      onClick={onLogout}
      className="cursor-pointer"
    />
  </div>
);

export default Header;
