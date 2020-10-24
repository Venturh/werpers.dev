import styled from "styled-components";

import Button from "./Button";

import { socials } from "content";

const Footer = () => {
  return (
    <Wrapper>
      {socials.map(({ link, icon }) => (
        <Button
          out
          hover
          to={link}
          key={link}
          rightIcon={icon}
          color="bodyContrast"
          iconSize="1.5em"
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
`;

export default Footer;
