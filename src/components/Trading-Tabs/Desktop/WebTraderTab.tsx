import CTAButton from "@/components/common/CTAButton";

const WebTraderTab = () => {
  return (
    <div className="lg:flex">
      <div className="lg:pt-16 lg:pr-6 lg:pb-18 lg:pl-0 pt-8 lg:w-[calc(41%+24px)] w-full">
        <h4 className="lg:text-white text-4xl mb-6">
          MetaTrader WebTrader Platform
        </h4>
        <p className="lg:text-white mb-6 leading-7">
          Trade anywhere, any time, without having to download any software.
          Whether you use a Mac or a PC, you can tap into to the markets via
          your browser hassle-free, with the WebTrader trading platform.
        </p>
        <div className="mt-10 mb-10 lg:mb-0 lg:hidden block">
          <img
            src="https://dynamic-images.admiralmarkets.com/800x,webp/static-images.admiralmarkets.com/data/homepage/tab-3.png"
            alt="MetaTrader"
            width="649"
            height="490"
            loading="lazy"
          />
        </div>
        <div>
          <CTAButton>start trading</CTAButton>
        </div>
      </div>
      <div className="mt-10 lg:block hidden">
        <img
          src="https://dynamic-images.admiralmarkets.com/800x,webp/static-images.admiralmarkets.com/data/homepage/tab-3.png"
          alt="MetaTrader"
          width="649"
          height="490"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WebTraderTab;
