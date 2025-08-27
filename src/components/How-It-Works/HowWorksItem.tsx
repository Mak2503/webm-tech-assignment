interface HowWorksItemProps {
  id: number;
  title: string;
  description: string;
  color: string;
}

const HowWorksItem = ({ id, title, description, color }: HowWorksItemProps) => {
  return (
    <div
      className="flex flex-col items-center text-center max-w-[312px] mx-auto"
    >
      <div
        className="flex items-center justify-center shadow-md w-12 h-12 md:w-28 md:h-28 mb-4 text-[27px] md:text-[80px] rounded-full"
        style={{ border: `1px solid ${color}`, color }}
      >
        {id}
      </div>
      <h3 className="text-2xl font-medium leading-8 mb-4">{title}</h3>
      <p className="opacity-60">{description}</p>
    </div>
  );
};

export default HowWorksItem;
