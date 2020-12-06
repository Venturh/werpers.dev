import styled from 'styled-components';

import { socials } from 'content';
import IconButton from './IconButton';

const Footer = () => {
  return (
    <div className="flex items-center flex-shrink-0 p-8">
      {socials.map(({ link, icon }) => (
        <IconButton
          className="mr-8 fill-current text-secondary"
          iconSize="lg"
          to={link}
          key={link}
          icon={icon}
          colored
        />
      ))}
    </div>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
`;

export default Footer;
