import styled from "styled-components";

import { Caption } from "./Typography";

import { card2 } from "styles";

type Props = { children: React.ReactNode; className?: string };

const Pill: React.FC<Props> = ({ children, className }) => (
  <Wrapper className={className}>
    <Caption color="primary">{children}</Caption>
  </Wrapper>
);

export default Pill;

const Wrapper = styled.div`
  ${card2}
  padding: 0.5em 1em;
`;
