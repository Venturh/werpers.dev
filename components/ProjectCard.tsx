import styled from "styled-components";
import Link from "next-translate/Link";

import { ButtonText, Text, Title } from "./Typography";
import Icon from "./Icon";

import { card3 } from "styles/common";
import Flair from "./Flair";
import { Project } from "lib/prismic";

const ProjectCard = ({ name, headline, slug, icon, buildWith }: Project) => {
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
          <Title color="primary">{name}</Title>
          <Description color="bodyContrast">{headline}</Description>
          <Bottom>
            <ButtonText>Open Source</ButtonText>
            <Flairs>
              {buildWith.map(({ icon }) => (
                <Flair key={icon} icon={icon} />
              ))}
            </Flairs>
          </Bottom>
        </CardInfo>
      </Content>
    </Link>
  );
};

export default ProjectCard;

const Content = styled.a`
  display: flex;
  align-items: center;
  ${card3}
  width: 100%;
  padding: 0.5em 0;
`;
const CardInfo = styled.div`
  width: 100%;
`;

const Description = styled(Text)`
  min-height: 2.5em;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    min-height: 1em;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.25em;
`;

const Flairs = styled.div`
  display: flex;
  gap: 0.25em;
`;
