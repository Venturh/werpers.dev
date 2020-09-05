import React from "react";
import styled from "styled-components";
import Link from "next-translate/Link";
import { useRouter } from "next/router";

import { colors } from "styles";

type Props = { children: React.ReactNode; nav?: boolean; to: string };
type LinkProps = {
  color?: string;
  underline?: boolean;
  activeColor?: string;
  active?: boolean;
};

const MyLink: React.FC<Props> = ({ nav, to, children, ...props }) => {
  const { pathname } = useRouter();

  if (nav)
    return (
      <NavLink noLang href={to}>
        <Style active={pathname === to ? true : false}>{children}</Style>
      </NavLink>
    );
  else
    return (
      <LinkOut href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </LinkOut>
    );
};

export default MyLink;

const NavLink = styled(Link)<LinkProps>`
  color: ${(p) => (p.active === 1 ? colors.primary : colors[p.color])};
  text-decoration: ${(p) => (p.underline ? "underline" : "inherit")};
`;

const Style = styled.a<LinkProps>`
  & > * {
    color: ${(p) => (p.active === true ? colors.primary : colors[p.color])};
  }
  cursor: pointer;
`;

const LinkOut = styled.a<LinkProps>`
  color: ${(p) => colors[p.color]};
  text-decoration: ${(p) => (p.underline ? "underline" : "inherit")};
  cursor: pointer;
`;
