import React from "react";
import styled from "styled-components";
import { breakpoints, spacing } from "../styles";
import Navigation from "./Navigation";

type Props = { small?: boolean };

const Layout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Navigation />
      <Content {...props}>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main<Props>`
  flex: 1 0 auto;
  padding: 5em ${spacing.xs.sides};
  padding-bottom: 0;

  @media (min-width: ${breakpoints.lg}) {
    margin: 0;
    padding: 7em ${(p) => (p.small ? "30%" : spacing.lg.sides)};
    padding-bottom: 0;
  }

  @media (min-width: ${breakpoints.xl}) {
    margin: 0;
    padding: 7em ${(p) => (p.small ? "30%" : spacing.lg.sides)};
    padding-bottom: 0;
  }
`;
