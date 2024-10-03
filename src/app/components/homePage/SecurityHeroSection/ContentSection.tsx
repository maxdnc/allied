import FeatureItem from '../../FeatureItem';
import BusinessTag from '../../reusable-UI/BusinessTag';
import StyledButtonLink from '../../reusable-UI/StyledButtonLink';

const ContentSection = () => {
  const features = [
    'Custom Security Solutions',
    'Emergency Support',
    'Security Audits',
  ];

  return (
    <div className="space-y-5 max-w-[742px] flex-1">
      <BusinessTag label={'Security Services'} />
      <h1 className="text-[65px] leading-[60px]">
        Experience Unmatched <br /> Security Services
      </h1>
      <p className="text-xl leading-[30px]">
        Comprehensive security services to protect your home and business with
        24/7 monitoring and advanced solutions
      </p>
      <StyledButtonLink href={'/'} label={'Contact Us'} />

      <ul className="flex gap-6">
        {features.map((feature, index) => (
          <li key={index}>
            <FeatureItem feature={feature} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentSection;
