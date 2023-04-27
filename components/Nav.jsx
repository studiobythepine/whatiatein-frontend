import React from "react";
import Link from "next/link";
import Ad from "./Ad";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState("reviews");

  const handleNavClick = (e) => {
    setIsOpen(e);
    console.log(e);
  };

  return (
    <nav className="z-10 fixed w-full h-28  bg-indigo-800 md:w-1/4 md:h-screen">
      <div className="flex flex-col">
        <Link href="/" className={`text-5xl bg-indigo-200 text-center`}>
          what i ate in...
        </Link>
        <ul className="flex flex-row justify-evenly md:items-center md:flex-col md:gap-20 md:py-20 ">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen("reviews")}
              className={`font-bold text-3xl md:text-5xl hover:underline transition ${
                isOpen === "reviews" ? "text-indigo-200" : "text-indigo-800"
              }`}>
              
                Reviews
              
            </Link>
          </li>
          <li>
            <Link
              href="/places/"
              onClick={() => setIsOpen("places")}
              className="font-bold text-3xl md:text-5xl">
              
                Places
              
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen("about")}
              className="font-bold text-3xl md:text-5xl">
              
                About
              
            </Link>
          </li>
        </ul>
        <Ad />
      </div>
    </nav>
  );
};

export default Nav;
