import SymbolTable from "./SymbolTable";
import TCSide from "./TCSide";

const TradingConditions = () => {
  return (
    <section className="md:p-[60px] py-8">
      <div className="container">
        <div className="lg:flex space-y-10">
          <TCSide />
          <SymbolTable />
        </div>
      </div>
    </section>
  );
};

export default TradingConditions;
