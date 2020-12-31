import styled from 'styled-components';

import { socials } from 'content';
import IconButton from './IconButton';

const Footer = () => {
  return (
    <div className="flex items-center flex-shrink-0 p-8 mx-auto">
      {socials.map(({ link, icon }) => (
        <IconButton
          className="mr-8 fill-current text-secondary"
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
  );
};

export default Footer;
