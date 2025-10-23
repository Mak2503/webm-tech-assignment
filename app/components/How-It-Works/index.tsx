import CTAButton from "../common/CTAButton";
import HowWorksItem from "./HowWorksItem";

const howWorksItems = [
  {
    id: 1,
    title: "Register",
    description: "Sign up with your name and email address to start trading",
    color: "#0059fc",
  },
  {
    id: 2,
    title: "Fund",
    description: "Start trading from $25",
    color: "#008f94",
  },
  {
    id: 3,
    title: "Trade",
    description: "Log in and start trading more than 500 instruments!",
    color: "#00b65d",
  },
];

const HowItWorks = () => {
  return (
    <section className="p-[60px]">
      <div className="container">
        {/* Heading */}
        <h2 className="md:text-5xl text-4xl leading-[56px] mb-16 font-normal text-center tracking-wide">
          How it works
        </h2>

        {/* Items */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start md:gap-0">
          {howWorksItems.map((item) => (
            <HowWorksItem key={item.id} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a href="#" className="lg:w-auto w-full">
            <CTAButton>sign up for free</CTAButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
