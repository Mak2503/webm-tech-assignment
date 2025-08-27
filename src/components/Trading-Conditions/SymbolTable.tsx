import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ArrowUp from "@/assets/arrow-up.svg";
import ArrowDown from "@/assets/arrow-down.svg";

const SymbolImage = ({ symbol }: { symbol: string }) => {
  return <img src={symbol} className="flex items-center" alt={symbol} />;
};

const TableRowData = ({
  symbol,
  bid,
  ask,
  bg = false,
}: {
  symbol: string;
  bid: string;
  ask: string;
  bg?: boolean;
}) => {
  return (
    <TableRow style={{ background: bg ? "rgba(139,142,167,.07)" : "white"}} className="border-none">
      <TableCell className="font-medium text-center text-base flex items-center gap-3 py-4 pl-6 hover:text-blue-500 cursor-pointer">
        {bid < ask ? (
          <SymbolImage symbol={ArrowUp} />
        ) : (
          <SymbolImage symbol={ArrowDown} />
        )}
        {symbol}
      </TableCell>
      <TableCell className="text-center py-4 pl-6 text-base">{bid}</TableCell>
      <TableCell className="text-center py-4 pl-6 text-base">{ask}</TableCell>
    </TableRow>
  );
};

const SymbolTable = () => {
  return (
    <div className="lg:w-1/2 w-full">
      <Table className="shadow-md">
        <TableCaption className="text-left">
          Prices above are indicative only <br /> Data from Zero.MT5
        </TableCaption>
        <TableHeader className="text-xs">
          <TableRow className="border-none">
            <TableHead className="text-gray-400 py-4 pl-7">Symbol</TableHead>
            <TableHead className="text-center text-gray-400 py-4 pl-7">Bid</TableHead>
            <TableHead className="text-center text-gray-400 py-4 pl-7">Ask</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRowData symbol="GER40" bid="24081.09" ask="24080.19" bg />
          <TableRowData symbol="EURUSD" bid="1.15932" ask="1.15934" />
          <TableRowData symbol="GBPUSD" bid="1.15934" ask="1.15934" bg />
          <TableRowData symbol="USDJPY" bid="148.014" ask="148.019" />
          <TableRowData symbol="GOLD" bid="3382.25" ask="3382.25" bg />
          <TableRowData symbol="[USA30]" bid="45420.90" ask="45420.90" />
          <TableRowData symbol="BRENT" bid="66.84" ask="66.87" bg />
        </TableBody>
      </Table>
    </div>
  );
};

export default SymbolTable;
