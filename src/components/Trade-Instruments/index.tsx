import TradeItem from "./TradeItem";

const tradeItems = [
  {
    id: 1,
    name: "Forex",
    description: "80 CFDs on currency pairs",
    image:
      "https://static-images.admiralmarkets.com/images/elements/trading/icon-forex.svg",
  },
  {
    id: 2,
    name: "Indices",
    description: "12 Index CFDs, including cash CFDs and Index Futures",
    image:
      "https://static-images.admiralmarkets.com/images/elements/trading/icon-indices.svg",
  },
  {
    id: 3,
    name: "Commodities",
    description: "5 CFDs on precious metals and energies",
    image:
      "https://static-images.admiralmarkets.com/images/elements/trading/icon-commodities.svg",
  },
  {
    id: 4,
    name: "ETFs",
    description: "25 most prominent ETFs available via CFDs",
    image:
      "https://static-images.admiralmarkets.com/images/elements/trading/icon-ETFs.svg",
  },
  {
    id: 5,
    name: "Stocks",
    description: "500+ CFDs on global blue-chip stocks",
    image:
      "https://static-images.admiralmarkets.com/images/elements/trading/icons-bonds.svg",
  },
  {
    id: 6,
    name: "Cryptocurrencies",
    description: "CFDs on Bitcoin, Dash, Ether, Litecoin and more",
    image:
      "https://static-images.admiralmarkets.com/images/elements/trading/icon-crypto.svg",
  },
];

const TradeInstruments = () => {
  return (
    <section className="md:p-[60px] py-8">
      <div className="container">
        <h2 className="sm:text-5xl md:text-[32px] text-[28px] leading-14 mb-10 font-normal sm:text-center tracking-wide">
          Trade 2500+ instruments
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-8 gap-x-10">
          {tradeItems.map((item) => (
            <TradeItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradeInstruments;
