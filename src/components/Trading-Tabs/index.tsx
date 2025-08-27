import "./TradingTabs.css";
import TradingTabsDesktop from "./Desktop/TradingTabsDesktop";
import TradingTabsMobile from "./TradingTabsMobile";

const TradingTabs = () => {
  return (
    <section className="my-[60px]">
      <TradingTabsDesktop />
      <TradingTabsMobile />
      {/* Mobile */}
    </section>
  );
};

export default TradingTabs;
