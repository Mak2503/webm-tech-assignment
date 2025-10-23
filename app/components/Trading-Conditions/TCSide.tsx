import { Check } from "lucide-react";
import CTAButton from "../common/CTAButton";

const features = [
  {
    label: "Leverage upto",
    subItems: ["1:1000"],
  },
  {
    label:
      "Forex typical spreads from 0 pips (EURUSD), micro lots and fractional shares",
  },
  { label: "Stocks CFDs — commission-free*" },
  { label: "Free real-time charts, market news and research" },
  {
    label: "500+ CFDs on currencies, energies, metals, indices, stocks & ETFs",
  },
];

const CheckBullet = () => (
  <div className="w-5 h-5 flex justify-center items-center border-2 border-blue-500 rounded-full shrink-0">
    <Check
      width={12}
      height={12}
      strokeWidth={4}
      className="text-blue-500"
    />
  </div>
);

const TCSide = () => {
  return (
    <div className="space-y-6 lg:w-1/2 w-full">
      {/* Heading */}
      <h2 className="lg:text-5xl text-4xl opacity-85">Top trading conditions</h2>
      <p className="leading-7 opacity-85">
        Trade our best conditions yet, including some of the market`s most
        competitive spreads!
      </p>

      {/* Features */}
      <ul className="space-y-5">
        {features.map((item, idx) => (
          <li key={idx}>
            <div className="flex gap-2 items-start">
              <CheckBullet />
              <span>{item.label}</span>
            </div>
            {item.subItems && (
              <ul className="pl-18 mt-2 list-disc space-y-1 text-gray-700">
                {item.subItems.map((sub, subIdx) => (
                  <li key={subIdx}>{sub}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#">
        <CTAButton>try free on demo</CTAButton>
      </a>
    </div>
  );
};

export default TCSide;
