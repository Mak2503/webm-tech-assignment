import CTAButton from "../common/CTAButton";
import "./GetInTouch.css"

const GetInTouch = () => {
  return (
    <section className="in-touch">
      <div className="container">
        <div className="in-touch-wrapper">
          <div className="get-in-touch-img" data-text="Hello!">
            <img
              src="https://dynamic-images.admiralmarkets.com/670x,webp/static-images.admiralmarkets.com/data/homepage/flat-phone-new.png"
              alt="Get in touch"
              loading="lazy"
              width="521"
              height="328"
            />
          </div>
          <div className="get-in-touch-info space-y-6">
            <h2 className="lg:text-5xl text-4xl leading-14 opacity-85">Get in touch</h2>
            <p className="leading-7 opacity-85">More questions? Contact us today!</p>
            <a href="#">
              <CTAButton>contact us</CTAButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
