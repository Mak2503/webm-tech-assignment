import CTAButton from "@/components/common/CTAButton";

const PCTab = () => {
  return (
    <div className="lg:flex">
      <div
        className="lg:pt-16 lg:pr-6 lg:pb-18 lg:pl-0 pt-8 lg:w-[calc(41%+24px)] w-full"
      >
        <h4 className="lg:text-white text-4xl mb-6">
          MetaTrader: The #1 tool for traders and investors worldwide
        </h4>
        <p className="lg:text-white mb-6 leading-7">
          Trade in 500+ trading instruments including Forex pairs, CFDs on
          indices, commodities, shares and ETFs. Available on Windows.
        </p>
        <div className="mt-10 lg:hidden block">
          <img
            src="https://dynamic-images.admiralmarkets.com/600x,webp/static-images.admiralmarkets.com/data/homepage/tab-1.png"
            alt="PC"
            width="459"
            height="300"
            loading="lazy"
          />
        </div>
        <div className="flex items-center gap-4 mt-8">
          <div className="border rounded-full w-9 h-9 lg:flex hidden justify-center items-center">
            <a href="#">
              <img
                src="https://static-images.admiralmarkets.com/images/icons/windows-icon.svg"
                alt="windows platform"
                width="16"
                height="16"
                loading="lazy"
              />
            </a>
          </div>
          <div className="lg:w-auto w-full">
            <CTAButton>get metatrader</CTAButton>
          </div>
        </div>
      </div>
      <div className="mt-10 hidden lg:block">
        <img
          src="https://dynamic-images.admiralmarkets.com/900x,webp/static-images.admiralmarkets.com/data/homepage/tab-1.png"
          alt="PC"
          width="649"
          height="426"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default PCTab;
