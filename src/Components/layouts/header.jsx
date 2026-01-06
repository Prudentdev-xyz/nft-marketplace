import React from "react";
import logo from "/logo.svg";

export const links = [
  {
    link: "",
    text: "MarketPlace",
  },
  {
    link: "",
    text: "Ranking",
  },
  {
    link: "",
    text: "Connect a wallet",
  },
];

const header = () => {
  return (
    <div>
      {/* NavbarLogo */}
      <div className="h-12">
        <img src={logo} alt="logo" />
      </div>

      {/* Navbar links */}
      <div>
        <ul>
          {links.map((link) => (
            <li>{link.text}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default header;
