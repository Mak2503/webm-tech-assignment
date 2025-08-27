import { Theme } from "@radix-ui/themes";
import "./App.css";
import Hero from "./components/Hero/Hero";
import HeroDark from "./components/Hero/HeroDark";
import HowItWorks from "./components/How-It-Works";
import Nav from "./components/Nav";
import TradeInstruments from "./components/Trade-Instruments";
import TradingTabs from "./components/Trading-Tabs";
import TradingConditions from "./components/Trading-Conditions";
import WhyChoose from "./components/Why-Choose";
import TryDemo from "./components/TryDemo";
import GetInTouch from "./components/Get-In-Touch";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Theme>
      <div>
        <ScrollToTopButton />
        <Nav />
        <Hero />
        <HeroDark />
        <TradeInstruments />
        <HowItWorks />
        <TradingTabs />
        <TradingConditions />
        <WhyChoose />
        <TryDemo />
        <GetInTouch />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
