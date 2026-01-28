import React from "react";
import logo from "/logo.svg";
import { SignUp } from "../buttons/SignUp";

export const links = [
  {
    link: "/Marketplace",
    text: "Marketplace",
  },
  {
    link: "/Rankings",
    text: "Rankings",
  },
  {
    link: "/Connect a wallet",
    text: "Connect a wallet",
  },
];

export const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-screen-2 py-6 px-13 top-0 fixed md:relative  bg-background z-20">
        <div className="h-12">
          <a href="//Marketplace">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div>
          <ul className="md:flex hidden gap-10 items-center">
            {links.map((link) => (
              <li className="text-white cursor-pointer transition-colors font-semibold">
                {link.text}
              </li>
            ))}

            <div>
              <SignUp />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
