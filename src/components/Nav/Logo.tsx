const Logo = () => {
  return (
    <picture>
      <source
        media="(min-width:545px)"
        srcSet="https://static-images.admiralmarkets.com/data/admirals/admirals.svg"
      />
      <img
        alt="Admirals"
        src="https://dynamic-images.admiralmarkets.com/68x,webp/static-images.admiralmarkets.com/data/admirals/admirals-small.png"
        className="p-4 lg:h-[55px] h-[60px]"
      />
    </picture>
  );
};

export default Logo;
