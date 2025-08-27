import { Button } from "../ui/button";

const HeroDark = () => {
  return (
    <div className="bg-black text-white">
      <div className="hero-dark-container container">
        <div className="hero-dark-body">
          <div className="hero-dark-subtitle">Great News for traders!</div>
          <h1 className="hero-dark-title">Trade CFD with 0 swap fees</h1>
          <div className="hero-dark-text">
            Experience the freedom of trading without swaps on the most
            sought-after currency pairs, precious metals, and index CFDs! Enjoy
            a seamless trading experience that allows you to maximise your
            potential without the burden of overnight fees.*
          </div>
          <a href="#">
            <Button className="bg-blue-500 hover:bg-blue-600 py-9 px-32 text-base">Start Trading</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroDark;
