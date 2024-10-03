const SatisfactionCard = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="p-[10px] shadow-custom-lg bg-background rounded-2xl">
        <div className="flex flex-col gap-1 justify-center items-center">
          <span className="text-titleText text-xl font-semibold"> 99%</span>
          <span className="text-center text-titleText text-[10px]">
            Customer Satisfaction <br /> Rate
          </span>
        </div>
      </div>
    </div>
  );
};
export default SatisfactionCard;
