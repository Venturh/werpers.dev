import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import CustomLink from "./CustomLink";
import LanguageSwitch from "./LanguageSwitch";
import Pill from "./Pill";
import { Title, Text, Span } from "./Typography";

import { breakpoints, colors, spacing } from "styles";
import { navlinks } from "content";
import Button from "./Button";

const Navigation = () => {
  const { t } = useTranslation();

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
            <StyledLink key={name} nav to={`${to}`}>
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
  font-family: "Segoe UI";
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  height: 3em;
  background-color: ${colors.body};
  border-bottom: 1px solid ${colors.bodyTint};
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
    margin-right: 0.25em;
  }
`;

const StyledLink = styled(CustomLink)`
  padding: 0.5em 0.5em;
  border-radius: 0.5em;
  :hover {
    background: ${colors.bodyTint};
  }
`;

const NavTools = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`;
