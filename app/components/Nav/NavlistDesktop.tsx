import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLocation } from "react-router";

const NavlistDesktop = () => {
  const location = useLocation()
  return (
    <NavigationMenu viewport={false} className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Open account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex p-1 min-w-[400px] gap-10">
              <div className="space-y-4">
                <p className="text-xs leading-7 text-gray-600">Accounts</p>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Trading Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Investment Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Islamic Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Demo Account
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-500">
                      Account Types
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="space-y-4">
                  <p className="text-xs leading-7 text-gray-600">Conditions</p>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Documents & Policies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Regulation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Deposits & Withdrawals
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-xs leading-7 text-gray-600">
                    Personal Finance
                  </p>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Cashback
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Welcome Bonus
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Admirals Wallet
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platforms</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <p>Trading Platforms & Tools</p>
              <div className="flex p-1 min-w-[400px] gap-10">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs leading-7 text-gray-600">Web</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Admirals Platform
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          MetaTrader WebTrader
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs leading-7 text-gray-600">Mobile</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Admirals Mobile App
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs leading-7 text-gray-600">Tools</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          MetaTrader Supreme Edition
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          StereoTrader
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          VPS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Parallels for MAC
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs leading-7 text-gray-600">Desktop</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          MetaTrader 4
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          MetaTrader 5
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Asset Management
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div>
              <p>Markets & products</p>
              <div className="flex p-1 min-w-[400px] gap-10">
                <div className="space-y-4">
                  <p className="text-xs leading-7 text-gray-600">Category</p>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Forex
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Commodities
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Indices
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Stocks
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        ETFs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-blue-500">
                        Cryptocurrencies
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs leading-7 text-gray-600">
                      Conditions
                    </p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Margin Requirements
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Contract Specifications
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs leading-7 text-gray-600">Features</p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="hover:text-blue-500">
                          Fractional Investing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Education</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="space-y-4 p-3 w-full min-w-[200px]">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Our academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Forex & CFD Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Articles & Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Trading Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  E-books
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="space-y-4 p-3 w-full min-w-[200px]">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Analytics & Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Macroscope
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Trading News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Research Terminal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Forex Calendar
                </a>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/about-us" className={`hover:text-blue-500 ${location.pathname.includes("about-us") && "text-blue-500"}`}>
            <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          </a>
          {/* <NavigationMenuContent>
            <ul className="space-y-4 p-3 w-full min-w-[200px]">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Leaderships & Expert
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Financial Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Secure your Trading Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Careers
                </a>
              </li>
            </ul>
          </NavigationMenuContent> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/contact-us" className={`hover:text-blue-500 ${location.pathname.includes("contact-us") && "text-blue-500"}`}>
            <NavigationMenuTrigger>Contact us</NavigationMenuTrigger>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavlistDesktop;
