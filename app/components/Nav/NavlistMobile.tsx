import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const NavlistMobile = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 flex gap-2 items-center">
            <Menu className="h-5 w-5" />
            <span className="text-sm font-medium">Menu</span>
          </button>
        </SheetTrigger>
        <SheetContent side="top" className="p-6">
          <SheetHeader className="flex items-center justify-between">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col space-y-4">
            <a href="/" className="hover:underline">
              Open account
            </a>
            <a href="/docs" className="hover:underline">
              Products
            </a>
            <a href="#" className="hover:underline">
              Platforms
            </a>
            <a href="#" className="hover:underline">
              Education
            </a>
            <a href="#" className="hover:underline">
              Analytics
            </a>
            <a href="/about-us" className="hover:underline">
              About us
            </a>
            <a href="/contact-us" className="hover:underline">
              Contact us
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavlistMobile;
