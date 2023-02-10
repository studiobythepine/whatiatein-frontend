import React from "react";
import Link from "next/link";
import Ad from "./Ad";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="z-10 fixed w-full h-28  bg-indigo-800 md:w-1/4 md:h-screen">
      <div className="flex flex-col">
        <Link href="/">
          <a className="text-5xl bg-indigo-200 text-center">what i ate in...</a>
        </Link>
        <ul className="flex flex-row justify-evenly md:items-center md:flex-col md:gap-20 md:py-20 ">
          <li>
            <Link href="/">
              <a className="font-bold text-3xl md:text-5xl">Reviews</a>
            </Link>
          </li>
          <li>
            <Link href="/places/">
              <a className="font-bold text-3xl md:text-5xl">Places</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="font-bold text-3xl md:text-5xl">About</a>
            </Link>
          </li>
        </ul>
        <Ad />
      </div>
    </nav>
  );
};

export default Nav;
