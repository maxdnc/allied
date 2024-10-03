import Image from 'next/image';
import SecurityIcon from '../../icon-svg/SecurityIcon';
import CheckBackgroundIcon from '../../icon-svg/CheckBackgroundIcon';
import SatisfactionCard from '../../reusable-UI/SatisfactionCard';
import securityMan from '/public/securityMan.png';

const ImageSection = () => (
  <div className="flex justify-center items-center relative">
    <div className="w-full h-[413px] max-w-[366px] overflow-hidden">
      <Image
        src={securityMan}
        alt={'security man'}
        className="object-cover w-full h-full"
      />
    </div>
    <SecurityIcon className="absolute top-[35px] right-2" />
    <CheckBackgroundIcon className="absolute bottom-4 translate-y-full -translate-x-3 left-0" />
    <SatisfactionCard className="absolute bottom-0 translate-y-16 right-0" />
  </div>
);

export default ImageSection;
