import styled from "styled-components";

import Navigation from "./Navigation";
import Footer from "./Footer";

import { breakpoints, spacing } from "../styles";

type Props = { small?: boolean };

const Layout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Navigation />
      <Content {...props}>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: 100vh;

  padding: 0 ${spacing.xs.sides};

  @media (min-width: ${breakpoints.lg}) {
    margin: 0;
    padding: 0 ${spacing.md.sides};
  }

  @media (min-width: ${breakpoints.xl}) {
    margin: 0;
    padding: 0 ${spacing.lg.sides};
  }
`;

const Content = styled.main<Props>`
  position: relative;
  min-height: calc(100vh - 9em);
  padding: ${(p) => (p.small ? "2em 20%" : "2em 0")};
`;
