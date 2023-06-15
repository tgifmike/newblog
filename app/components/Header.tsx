import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="max-w-5xl mx-auto py-1">
      <header className="flex items-center justify-between">
        <Link href=" / ">
          <Image
            src="/TML_logo.png"
            width={250}
            height={200}
            alt="The Manager Life Logo"
            className="object-cover"
          />
        </Link>

        <div className="flex items-center gap-5 text-lg text-gray-600">
          <Link href="/about">About</Link>
          <Link href="/allblogs">All Blogs</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
