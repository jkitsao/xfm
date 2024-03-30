import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="lg:py-3  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60   ">
      <div className="flex justify-center items-center p-5 text-xl font-semibold text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZt4v_gnup86P48zzfOn5gqio0K-u6-5Xuzln4szl0A&s"
          alt="logo"
          className="w-12 h-12 object-contain mx-2"
        />
        <span className="text-center">Rock and Alternative Music 24/7</span>
      </div>
    </nav>
  );
}

export default Navbar;
