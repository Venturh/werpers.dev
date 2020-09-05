import React from "react";
import styled from "styled-components";
import { breakpoints, colors, spacing } from "styles";
import { Title, Text, Span } from "./Typography";
import Pill from "./Pill";
import CustomLink from "./CustomLink";
import LanguageSwitch from "./LanguageSwitch";
import useTranslation from "next-translate/useTranslation";

const Navigation = () => {
  const { t, lang } = useTranslation();
  const navlinks = [
    { name: "nav1", to: "" },
    { name: "nav2", to: "/projects" },
    { name: "nav3", to: "/about" },
  ];

  return (
    <Nav>
      <Left>
        <CustomLink to="/" nav>
          <DesktopLogo>
            <Title color="primary">max</Title>
            <Title color="bodyContrast">werpers</Title>
          </DesktopLogo>
          <MobileLogo>
            <Text color="primary">
              M<Span color="bodyContrast">W</Span>
            </Text>
          </MobileLogo>
        </CustomLink>
        <InfoPill>{t(`common:pill`)}</InfoPill>
      </Left>
      <NavItems>
        <NavLinks>
          {navlinks.map(({ name, to }) => (
            <StyledLink nav to={`/${lang}${to}`} key={name}>
              <Text color="bodyContrast">{t(`common:${name}`)}</Text>
            </StyledLink>
          ))}
        </NavLinks>
        <NavTools>
          <LanguageSwitch />
        </NavTools>
      </NavItems>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  font-family: "Archivo";
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 3em;
  background-color: ${colors.body};
  border-bottom: 1px solid ${colors.bodyTint};
  padding: 0 ${spacing.xs.sides};

  @media (min-width: ${breakpoints.lg}) {
    padding: 1.5em ${spacing.md.sides};
  }
  @media (min-width: ${breakpoints.xl}) {
    padding: 1.5em ${spacing.md.sides};
  }
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const DesktopLogo = styled.div`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    align-items: center;
  }
`;

const MobileLogo = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const InfoPill = styled(Pill)`
  display: none;
  @media (min-width: ${breakpoints.lg}) {
    display: inline;
    margin-left: 1em;
  }
`;

const NavItems = styled.div`
  display: flex;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  & > * {
    margin-right: 0.5em;
    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
      margin-right: 0.5em;
    }
  }
`;

const StyledLink = styled(CustomLink)`
  padding: 0.5em 0.25em;
  border-radius: 0.25em;
  :hover {
    background-color: ${colors.bodyTint};
  }
`;

const NavTools = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  height: 100%;
  font-weight: 400;
`;
