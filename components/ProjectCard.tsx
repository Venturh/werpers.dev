import styled from "styled-components";
import Link from "next-translate/Link";

import { Caption, Text, Title } from "./Typography";
import Icon from "./Icon";

import { card2 } from "styles/common";

const ProjectCard = ({ name, headline, slug, icon }) => {
  return (
    <Link passHref href={`/projects/${slug}`}>
      <Content>
        <Icon
          style={{ padding: "0 1.5em" }}
          color="primary"
          size="2.5em"
          path={icon}
        />
        <CardInfo>
          <Caption>Open Source</Caption>
          <Title color="primary">{name}</Title>
          <Text color="bodyContrast">{headline}</Text>
        </CardInfo>
      </Content>
    </Link>
  );
};

export default ProjectCard;

const Content = styled.a`
  display: flex;
  align-items: center;
  ${card2}
  width: 100%;
  padding: 0.5em 0;
`;
const CardInfo = styled.div`
  width: 60%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: initial;
  }
`;
