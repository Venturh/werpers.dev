import styled from "styled-components";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import { colors } from "styles";

type Props = {
  children: React.ReactNode;
  color?: string;
  underline?: boolean;
  nav?: boolean;
  to: string;
};
type LinkProps = {
  color?: string;
  underline?: boolean;
  activeColor?: string;
  active?: boolean;
};

const CustomLink: React.FC<Props> = ({
  nav,
  color,
  underline,
  to,
  children,
}) => {
  const { pathname } = useRouter();

  const { lang } = useTranslation();
  return (
    <Link noLang href={`/${lang}${to}`} passHref>
      <A
        target={nav ? "" : "_blank"}
        rel="noopener noreferrer"
        active={pathname === `/${lang}${to}` ? true : false}
        underline={underline}
      >
        {children}
      </A>
    </Link>
  );
};

export default CustomLink;

const A = styled.a<LinkProps>`
  cursor: pointer;
  & > * {
    color: ${(p) => (p.active === true ? colors.primary : colors[p.color])};
    text-decoration: ${(p) => (p.underline ? "underline" : "inherit")};
  }
`;
