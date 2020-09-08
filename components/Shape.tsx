import styled from "styled-components";
import { colors } from "styles";

type ShapeProps = {
  bg?: string;
  tbg?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
};

const Shape = (props: ShapeProps) => {
  return <StyledShape {...props} />;
};

export default Shape;

export const StyledShape = styled.span<ShapeProps>`
  background: ${(p) => p.bg || colors[p.tbg]};
  border-radius: ${(p) => p.borderRadius};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
`;
