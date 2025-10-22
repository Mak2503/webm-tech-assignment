import { Button } from "../ui/button";
import "./Hero.css";

const HeroLight = () => {
  return (
    <div className="bg-[#f1f7fe]">
      <div className="hero-container container">
        <div className="hero-body">
          <h2 className="hero-title">Commission-Free Global Stock Markets</h2>
          <div className="hero-text">
            Invest in a diverse range of stocks and ETFs from the US, EU, and UK
            markets without having to worry about commission fees. This means
            you can maximise your investment potential while keeping your costs
            low, allowing you to build a robust portfolio with ease.*
          </div>
          <a href="#">
            <Button className="bg-blue-500 hover:bg-blue-600 py-9 px-32 text-base">Start Investing</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroLight;
