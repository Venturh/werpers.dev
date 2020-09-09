import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import CustomLink from "./CustomLink";
import Button from "./Button";
import Icon from "./Icon";
import { Span, Text } from "./Typography";

import { breakpoints, colors, spacing } from "styles";
import { socials } from "content";
import { Love } from "icons";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Credits>
        <Text style={{ display: "flex", alignItems: "center" }}>
          {t(`common:footer1`)}
          <Icon
            style={{ margin: "0 0.25em" }}
            size="1em"
            color="primary"
            path={Love}
          />
          {t(`common:footer2`)}
        </Text>
        <Text>
          {t(`common:footer3`)}
          <CustomLink color="primary" underline to="https://nextjs.org/">
            <Span color="primary">Next</Span>
          </CustomLink>{" "}
          {t(`common:footer4`)}
          <CustomLink underline to="https://vercel.com/">
            <Span as="span" color="primary">
              Vercel
            </Span>
          </CustomLink>
        </Text>
      </Credits>
      <div>
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 6em;
  border-top: 1px solid ${colors.bodyTint};
  padding: 2.5em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: ${breakpoints.xl}) {
  }
`;

const Credits = styled.div`
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

export default Footer;
