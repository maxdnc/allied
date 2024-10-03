const CheckIcon = ({
  color,
  className,
}: {
  color: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={className}
    >
      <path
        d="M16.6667 5.5L7.50004 14.6667L3.33337 10.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CheckIcon;
