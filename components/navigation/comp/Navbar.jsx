import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="lg:py-3  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  ">
      <div className="flex justify-center p-5 text-xl font-semibold text-white">
        <span>Rock and Alternative Music 24/7</span>
      </div>
    </nav>
  );
}

export default Navbar;
