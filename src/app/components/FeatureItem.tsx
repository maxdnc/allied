import CheckIcon from './icon-svg/CheckIcon';

const FeatureItem = ({ feature }: { feature: string }) => {
  return (
    <div className="inline-flex gap-1 items-center">
      <span>
        <CheckIcon color="#18A963" />
      </span>
      <span className="text-titleText">{feature}</span>
    </div>
  );
};
export default FeatureItem;
