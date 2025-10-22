import { Theme } from "@radix-ui/themes";
import Hero from "@/components/Hero/Hero";
import HeroDark from "@/components/Hero/HeroDark";
import HowItWorks from "@/components/How-It-Works";
import TradeInstruments from "@/components/Trade-Instruments";
import TradingTabs from "@/components/Trading-Tabs";
import TradingConditions from "@/components/Trading-Conditions";
import WhyChoose from "@/components/Why-Choose";
import TryDemo from "@/components/TryDemo";
import GetInTouch from "@/components/Get-In-Touch";
import Footer from "@/components/Footer";
import "@/App.css";

function App() {
  return (
    <Theme>
      <Hero />
      <HeroDark />
      <TradeInstruments />
      <HowItWorks />
      <TradingTabs />
      <TradingConditions />
      <WhyChoose />
      <TryDemo />
      <GetInTouch />
    </Theme>
  );
}

export default App;
