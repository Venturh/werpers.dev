import { socials } from 'content';
import Discord from './Discord';
import Logo from './Logo';
import Link from './Link';

const Footer = () => {
  return (
    <div className="flex flex-col flex-shrink-0 w-full py-6 space-y-4">
      <div className="w-full border-t-2 border-accentBg " />
      <Discord />
      <div className="grid grid-cols-3">
        {socials.map(({ link, internal, name }) => (
          <Link key={name} to={link} out={!internal}>
            <span className="text-base text-secondary">{name}</span>
          </Link>
        ))}
      </div>
      <p className="text-sm text-secondary">
        © 2020, Maximilian Werpers • werpers.dev{' '}
      </p>
    </div>
  );
};

export default Footer;
