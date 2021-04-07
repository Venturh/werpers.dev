import { socials } from 'content';
import Discord from './Discord';
import Logo from './Logo';
import Link from './Link';

const Footer = () => {
  return (
    <div className="flex flex-col flex-shrink-0 w-full py-6 space-y-2">
      <div className="w-full border-b-2 border-accentBg " />
      <Discord />
      <div className="grid grid-cols-3">
        {socials.map(({ link, internal, name }) => (
          <Link key={name} to={link} out={!internal}>
            <span className="text-base text-secondary">{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
