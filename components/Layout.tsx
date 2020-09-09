import styled from "styled-components";

import Navigation from "./Navigation";
import Footer from "./Footer";

import { breakpoints, spacing } from "../styles";

type Props = { small?: boolean };

const Layout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div<Props>`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: 100vh;

  padding: 0 ${spacing.xs.sides};

  @media (min-width: ${breakpoints.lg}) {
    margin: 0;
    padding: 0 ${(p) => (p.small ? "30%" : spacing.md.sides)};
  }

  @media (min-width: ${breakpoints.xl}) {
    margin: 0;
    padding: 0 ${(p) => (p.small ? "30%" : spacing.lg.sides)};
  }
`;

const Content = styled.main`
  position: relative;
  min-height: calc(100vh - 9em);
  padding: 2em 0;
`;
