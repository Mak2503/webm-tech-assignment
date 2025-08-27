"use client";

import Globe from "../../assets/globe.svg";
import Logo from "./Logo";
import { Button } from "../ui/button";
import Navlist from "./Navlist";

const Navbar = () => {
  return (
    <div className="px-5 py-2 flex justify-between items-center h-[60px] lg:h-18">
      <Logo />
      <Navlist />
      <div className="flex items-center">
        <img src={Globe} alt="globe-icon" width={20} height={20} />
        <div className="w-[1px] h-10 bg-gray-200 ml-4 mr-2"></div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="font-normal text-blue-500 hover:text-blue-500 hover:bg-blue-50 p-2"
          >
            Login
          </Button>
          <Button className="font-normal bg-blue-500 hover:bg-blue-500">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
