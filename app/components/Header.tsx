import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <header className="py-5 bg-gray-700 text-white text-center">
        <div className="flex items-center gap-5 text-lg text-gray-600">
          <Link href="/">TML</Link>
          <Link href="/about">About</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
