import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import { Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/pagination"

const whyChooseCards = [
  {
    img: "https://static-images.admiralmarkets.com/images/elements/stocks/location.svg",
    title: "Support at Your Fingertips",
    desc: "Get personalized support with multilingual assistance via phone, email, and live chat",
  },
  {
    img: "https://static-images.admiralmarkets.com/images/elements/stocks/security.svg",
    title: "Funds are secured",
    desc: "All client deposits are kept separate from our own operating funds. Client money is held in designated client bank accounts, ensuring it is protected and segregated from our own funds",
  },
  {
    img: "https://static-images.admiralmarkets.com/images/elements/stocks/location.svg",
    title: "Start from $25",
    desc: "You can start trading from $25",
    button: true,
  },
];

const WhyChoose = () => {
  return (
    <section>
      <div className="container">
        <h2 className="md:text-5xl text-4xl leading-14 text-center md:mb-16">
          Why Choose Admirals?
        </h2>

        {/* Desktop */}
        <div className="hidden md:flex justify-center gap-10">
          {whyChooseCards.map((card, index) => (
            <div
              key={index}
              className="w-1/3 rounded-md space-y-4 flex flex-col justify-start items-center p-6 shadow-md pt-11"
              style={{ width: "calc(25% - 36px)" }}
            >
              <img
                src={card.img}
                alt={card.title}
                loading="lazy"
                width="28"
                height="40"
              />
              <h3 className="text-2xl font-medium text-center">{card.title}</h3>
              <p className="opacity-60 text-center leading-7">{card.desc}</p>
              {card.button && (
                <a href="#">
                  <Button
                    variant="ghost"
                    className="uppercase font-normal tracking-widest rounded-[4px] p-6 text-[#00b65d] hover:bg-green-50 hover:text-[#00b65d]"
                  >
                    Start Now
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden block w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            breakpoints={{
              768: { slidesPerView: 3 }, // Desktop/tablet → 3 cards
            }}
            slidesPerView={1} // Mobile → 1 card
            pagination={{ clickable: true }}
            className="-mx-4"
          >
            {whyChooseCards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div 
                  className="space-y-4 flex flex-col justify-start rounded-md my-[30px] mx-3 items-center shadow-md pt-6 px-4 pb-9 h-full"
                  style={{ boxShadow: "0 8px 16px 0 rgba(0, 0, 0, .1)" }}
                  >
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    width="28"
                    height="40"
                  />
                  <h3 className="font-medium text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm opacity-60 text-center">
                    {card.desc}
                  </p>
                  {card.button && (
                    <a href="#">
                      <Button
                        variant="ghost"
                        className="uppercase font-normal tracking-widest rounded-[4px] p-6 text-[#00b65d] hover:bg-green-50 hover:text-[#00b65d]"
                      >
                        Start Now
                      </Button>
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
