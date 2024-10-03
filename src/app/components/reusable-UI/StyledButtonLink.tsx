import Link from 'next/link';

const StyledButtonLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link
      href={href}
      className="inline-flex px-10 py-4 text-background bg-orangeToYellow-gradient rounded-full shadow-md"
    >
      <span>{label}</span>
    </Link>
  );
};
export default StyledButtonLink;
