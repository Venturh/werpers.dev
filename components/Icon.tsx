import styled from "styled-components";

import { colors } from "styles";

type IconProps = {
  color: string;
  size: string;
  viewbox?: string;
};

const Icon = ({
  path,
  color = "primary",
  size = "1em",
  viewbox = "0 0 24 24",
  ...rest
}) => {
  return (
    <StyledIcon color={color} size={size} viewBox={viewbox} {...rest}>
      <path d={path} />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg<IconProps>`
  fill: ${(p) => colors[p.color]};
  height: ${(p) => p.size};
`;

export default Icon;
