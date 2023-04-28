import React from "react";
import Link from "next/link";
import Ad from "./Ad";
import Image from "next/image";
import logo from "../public/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState("reviews");

  return (
    <nav className="z-10 fixed w-full h-28 bg-slate-900 md:w-1/4 md:h-screen">
      <div className="flex h-full md:flex-col justify-between  align-middle">
        <Link href="/" className={`text-5xl w-1/2 h-20 flex justify-center align-middle md:h-80 md:w-full`}>
          <div className="relative h-full w-full mt-4">
            <Image src={logo} alt="logo" fill style={{ objectFit: "scale-down" }}></Image>
          </div>
        </Link>
        <ul className="flex flex-col justify-evenly text-sm md:items-center md:flex-col md:gap-10 md:py-10 text-emerald-100 text-center">
          <li className="ease-in-out  hover:-translate-y-1 hover:scale-110 hover:text-emerald-200 duration-100">
            <Link href="/" className={`font-bold text-3xl md:text-5xl transition `}>
              Reviews
            </Link>
          </li>
          <li className="ease-in-out  hover:-translate-y-1 hover:scale-110 hover:text-emerald-200 duration-100">
            <Link href="/places/" onClick={() => setIsOpen("places")} className="font-bold text-3xl md:text-5xl">
              Places
            </Link>
          </li>
          <li className="ease-in-out  hover:-translate-y-1 hover:scale-110 hover:text-emerald-200 duration-100">
            <Link href="/about" onClick={() => setIsOpen("about")} className="font-bold text-3xl md:text-5xl">
              About
            </Link>
          </li>
        </ul>
        <Ad />
        <div className="absolute w-10 h-10 bg-lime-900 bottom-2 right-5 z-50 ease-in-out text-center text-[9px] font-thin hover:-translate-y-1 hover:scale-110 hover:text-lime-200 duration-100">
          <a href="https://www.studiobythepine.com" target="_blank">
            Studio by the pine.
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
