import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <span className="hidden md:flex bg-black text-[#979db1] w-full py-[9px] leading-5 tracking-wide font-light items-center justify-center">
        CFDs are complex instruments and come with a high risk of losing money
        rapidly due to leverage.
      </span>
      <div className="flex md:hidden bg-black">
        <span className="mx-4 text-[#979db1] w-full py-[9px] text-sm leading-5 tracking-wide font-light flex items-center">
          {isOpen ? (
            <>
              CFDs are complex instruments and come with a high risk of losing
              money rapidly due to leverage.
            </>
          ) : (
            <>Trading involves risk</>
          )}
        </span>
        {isOpen ? (
          <ChevronUp
            width={35}
            height={35}
            className="text-[#979db1] py-[9px] leading-5 tracking-wide font-light items-center justify-center"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <ChevronDown
            width={35}
            height={35}
            className="text-[#979db1] py-[9px] leading-5 tracking-wide font-light items-center justify-center"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
    </>
  );
};

export default Banner;
