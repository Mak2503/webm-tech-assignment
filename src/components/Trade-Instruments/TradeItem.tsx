interface TradeItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

const TradeItem = ({ item }: TradeItemProps) => {
  return (
    <div className="flex items-center gap-6 rounded-md shadow py-4 px-7">
      <div className="w-1/4">
        <img src={item.image} width={60} height={64} alt={item.name} />
      </div>
      <div className="w-3/4">
        <strong className="font-medium">{item.name}</strong>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </div>
  )
}

export default TradeItem