import styled from "styled-components";
import Link from "next-translate/Link";

import { ButtonText, Text } from "./Typography";
import Icon from "./Icon";

import { colors, card3 } from "styles";

type ButtonProps = {
  leftIcon?: string;
  rightIcon?: string;
  children?: React.ReactNode;
  to?: string;
  out?: boolean;
  hover?: boolean;
  iconSize?: string;
  color?: string;
  bg?: string;
  fontSize?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  children,
  to,
  out,
  hover,
  iconSize = "1.5em",
  color,
  bg = "primary",
  fontSize,
  onClick,
  className,
  style,
  ...rest
}) => {
  if (to === undefined) {
    return (
      <StyledContent
        className={className}
        style={style}
        onClick={onClick}
        hover={hover}
        fontSize={fontSize}
      >
        {leftIcon ? (
          <Icon path={leftIcon} color={color} size={iconSize} />
        ) : null}
        {children ? (
          <ButtonText style={{ margin: " 0 0.5em" }}>{children}</ButtonText>
        ) : null}
        {rightIcon ? (
          <Icon path={rightIcon} color={color} size={iconSize} />
        ) : null}
      </StyledContent>
    );
  }
  return (
    <Link noLang={out ? true : false} href={to} passHref {...rest}>
      <StyledContent
        className={className}
        style={style}
        onClick={onClick}
        hover={hover}
        target={out ? "_blank" : ""}
        fontSize={fontSize}
      >
        {leftIcon ? (
          <Icon path={leftIcon} color={color} size={iconSize} />
        ) : null}
        {children ? (
          <ButtonText style={{ margin: " 0 0.5em" }}>{children}</ButtonText>
        ) : null}
        {rightIcon ? (
          <Icon path={rightIcon} color={color} size={iconSize} />
        ) : null}
      </StyledContent>
    </Link>
  );
};

const Content = () => {};

const StyledContent = styled.a<ButtonProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.5em;
  border-radius: 0.25em;
  ${ButtonText} {
    font-size: ${(p) => p.fontSize};
  }
  :hover {
    background: ${(p) => (p.hover ? colors.bodyGlow : "")};
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${colors.primary};
  border: inherit;
  ${ButtonText} {
    color: ${colors.primaryContrast};
    font-weight: 600;
  }
  svg {
    fill: ${colors.primaryContrast};
  }
`;

export const SecondaryButton = styled(Button)`
  background: ${colors.body};
  border: 1px solid ${colors.primary};
  ${ButtonText} {
    color: ${colors.primary};
  }
`;

export const TertiaryButton = styled(Button).attrs({
  justify: "start",
  lower: true,
  fontSize: "sm",
})`
  ${card3}
  fill: ${colors.primary};
  & > * {
    margin-left: 0.5em;
  }
  ${Text} {
    color: ${colors.bodyContrast};
  }
`;

export default Button;
