import { useTranslation } from 'next-translate';
import { socials } from 'content';
import IconButton from './IconButton';
import Discord from './Discord';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col flex-shrink-0 w-full py-2 space-y-4 md:py-8 md:max-w-2xl md:mx-auto ">
      <div className="w-full my-2 border-b-2 border-accentBg " />
      <Discord />
      <div className="flex justify-center space-x-4 ">
        {socials.map(({ link, icon }) => (
          <IconButton
            className="fill-current text-secondary"
            iconSize="md"
            to={link}
            key={link}
            icon={icon}
            colored
            rounded
            outlined
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
