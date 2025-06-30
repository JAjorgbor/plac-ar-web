import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="border-b border-0.5">
      <nav className="max-w-7xl p-4 md:px-0 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            width={80}
            height={80}
            alt="logo"
            className="size-14"
          />
          <h2 className="text-green-800 font-semibold text-2xl">Placar</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="#" className="hover:text-green-800">
            Solutions
          </Link>
          ●
          <Link href="#" className="hover:text-green-800">
            About
          </Link>
          ●
          <Link href="#" className="hover:text-green-800">
            Contact
          </Link>
        </div>
        <Link
          href="#"
          className="px-4 py-2 text-white bg-green-800 rounded-3xl"
        >
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
};

export default Header;
