const BusinessTag = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex items-center justify-center px-4 py-[6px] rounded-full bg-black shadow-md">
      <span className="text-background text-[13px]">{label}</span>
    </div>
  );
};
export default BusinessTag;
