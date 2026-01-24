import React from 'react'
import logo from "/logo.svg";

export const links = [
    {
        link: "/Markeplace",
        text: "Markeplace",
    },
    {
        link: "/Rankings",
        text: "Rankings",
    },
    {
        link: "/Connect a wallet",
        text: "Connect a wallet",
    }
];

export const Header = () => {
  return (
    <>
       <div className='flex justify-between items-center max-w-screen-2xl py-4 px-9 top-0 fixed md:relative  bg-background z-20'>
         <div className='h-12'>
            <a href="">
            <img src={logo} alt="logo" />
            </a>
         </div>

         <div>
            <ul>
                <li>

                </li>
            </ul>
         </div>
       </div>
    </>
  )
}
