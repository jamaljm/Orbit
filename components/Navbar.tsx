import React from "react";
import useState from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const opening = () => {
    setOpen(!open);
  };

  const [dopen, setDopen] = React.useState(false);
  const [dopen1, setDopen1] = React.useState(false);

  const dopening = () => {
    setDopen(!dopen);
    setDopen1(false);
  };

  const dopening1 = () => {
    setDopen1(!dopen1);
    setDopen(false);
  };

  return (
    <header className="fixed rounded-b-3xl border-b-2 border-white w-full z-50 bg-gradient-to-b from-[#2362c0] to-[#2362c0] sm:bg-gradient-to-b sm:from-[#2362c0] sm:to-[#2362c0]">
      <div className="px-0 py-1 sm:px-0 mx-auto sm:max-w-7xl 2xl:max-w-7xl">
        <div className="px-4 sm:px-6 mx-auto ">
          <nav className="relative flex items-center justify-between lg:justify-end h-20 lg:h-18">
            <div className="lg:absolute lg:-translate-x-1 flex justify-center items-center lg:inset-y-5 lg:left-1">
              <div className="flex-shrink-0">
                <Link href="/" title="" className="flex">
                  <img className="w-auto h-7 lg:h-10" src="/logo2.png" alt="" />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
