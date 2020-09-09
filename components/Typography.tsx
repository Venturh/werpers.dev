import styled from "styled-components";

import { fontSizes, colors } from "styles";

type Props = { fontSize?: string; fontWeight?: number };

const Typography = ({ children, variant, text, ...props }) => (
  <StyledTypography as={variant} {...props}>
    {children || text}
  </StyledTypography>
);

const StyledTypography = styled.p<Props>`
  color: ${(p) => colors[p.color]};

  font-size: ${(p) => fontSizes[p.fontSize] || p.fontSize};
  font-weight: ${(p) => p.fontWeight};
  white-space: pre-line;
`;

const Caption = styled(Typography)`
  font-size: ${fontSizes.xs};
  color: ${(props) => colors[props.color] || colors.bodyContrast};
`;

const ButtonText = styled(Typography)`
  font-size: ${fontSizes.sm};
  color: ${(props) => colors[props.color] || colors.bodyContrast};
`;

const Text = styled(Typography)`
  font-size: ${fontSizes.md};
  color: ${(props) => colors[props.color] || colors.bodyContrast};
`;

const Subtitle = styled(Typography).attrs({ variant: "h4" })`
  font-size: ${fontSizes.lg};
  font-weight: 500;
  color: ${(props) => colors[props.color] || colors.bodyContrast};
`;

const Title = styled(Typography).attrs({ variant: "h3" })`
  font-size: ${fontSizes["xl"]};
  color: ${(props) => colors[props.color] || colors.primary};
`;

const Subheader = styled(Typography).attrs({ variant: "h2" })`
  font-family: "Segoe UI";
  text-align: center;
  font-size: ${fontSizes["2xl"]};
  font-weight: 600;
  color: ${(props) => colors[props.color] || colors.primary};
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    text-align: start;
  }
`;

const Header = styled(Typography).attrs({ variant: "h1" })`
  font-size: ${fontSizes["3xl"]};
  font-family: "Segoe UI";
  font-weight: 700;
  color: ${(props) => colors[props.color] || colors.primary};
`;

const Span = styled(Typography).attrs({ variant: "span" })`
  color: ${(props) => colors[props.color] || colors.bodyContrast};
`;

export default Typography;
export { Caption, ButtonText, Text, Subtitle, Title, Subheader, Header, Span };
