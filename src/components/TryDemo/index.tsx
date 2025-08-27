import CTAButton from "../common/CTAButton";
import "./TryDemo.css";

const TryDemo = () => {
  return (
    <section className="lg:my-8 lg:mx-0 mx-0 mt-11 mb-20 relative">
      <div className="container">
        <div className="demo-wrapper">
          <div className="space-y-6 max-w-full text-center md:text-left md:max-w-[500px] w-full">
            <h2 className="lg:text-5xl text-4xl leading-14 opacity-85">Try demo trading</h2>
            <p className="leading-7 opacity-85">
              Not sure how to start? We`ve got you! Start practicing trading
              with virtual funds on the Admirals demo trading account.
            </p>
            <a href="#">
              <CTAButton>try free on demo</CTAButton>
            </a>
          </div>
          <div className="max-w-[500px] w-full">
            <div className="flex justify-center items-center mt-20 mr-0 mb-16 md:m-0">
              <div className="w-[124px] h-[124px] rounded-[8px] bg-white shadow-md relative flex flex-col items-center justify-center p-2 pt-0">
                <div className="w-12 h-12 mb-4 mt-5 flex justify-center items-center">
                  <img
                    src="https://static-images.admiralmarkets.com/images/elements/trading/icon-mood-green.svg"
                    alt="No stress"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                </div>
                <p className="text-center text-sm leading-6">No stress</p>
              </div>
              <div className="w-[156px] h-[156px] -ml-2.5 -mr-2.5 z-[1] rounded-[8px] bg-white shadow-md relative flex flex-col items-center justify-center p-2 pt-0">
                <div className="w-16 h-16 mb-4 mt-6 flex justify-center items-center">
                  <img
                    src="https://static-images.admiralmarkets.com/images/elements/trading/icon-money-green.svg"
                    alt="No deposit"
                    loading="lazy"
                    width="42"
                    height="48"
                  />
                </div>
                <p className="text-center leading-6">No deposit</p>
              </div>
              <div className="w-[124px] h-[124px] rounded-[8px] bg-white shadow-md relative flex flex-col items-center justify-center p-2 pt-0">
                <div className="w-12 h-12 mb-4 mt-5 flex justify-center items-center">
                  <img
                    src="https://static-images.admiralmarkets.com/images/elements/trading/icon-no-cc-green.svg"
                    alt="No credit card"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                </div>
                <p className="text-center text-sm leading-6">No credit card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <picture className="absolute top-0 right-0 w-full h-full">
        <source
          srcSet="https://dynamic-images.admiralmarkets.com/2560x,webp/static-images.admiralmarkets.com/images/elements/try-demo.png"
          media="(min-width: 768px)"
        />
        <source
          srcSet="https://dynamic-images.admiralmarkets.com/330x,webp/static-images.admiralmarkets.com/images/elements/trading/try-demo-bg-mobile.png"
          media="(max-width: 767px)"
        />
        <img
          src="https://dynamic-images.admiralmarkets.com/2560x,webp/static-images.admiralmarkets.com/images/elements/try-demo.png"
          alt="Try demo trading"
          loading="lazy"
          width="2560"
          height="328"
          className="w-full h-full object-cover"
        />
      </picture>
    </section>
  );
};

export default TryDemo;
