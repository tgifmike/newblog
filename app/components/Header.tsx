import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <header className="flex items-center justify-between py-5 text-center">
        <div
          className="flex items-center gap-5 text-lg text-white-500
      "
        >
          <Link href="/">HOME</Link>
          <Link href="/about">About</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
