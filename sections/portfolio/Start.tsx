import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import {
  Header,
  PrimaryButton,
  ProjectCard,
  Span,
  Subheader,
  Text,
} from "components";

import { breakpoints, fontSizes } from "styles";

import { ArrowRightS } from "icons";

interface Node {
  node: {
    name: string;
    headline: string;
    icon: string;
    slug: string;
  };
}

interface Project {
  projects: Node[];
}

const Start = ({ projects }: Project) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Hero>
        <TextWrapper>
          <Heading color="bodyContrast">
            {t("common:hey")}{" "}
            <Span fontSize="header" color="primary">
              Max Werpers,
            </Span>
            <br />
            {t("common:whatS")}
          </Heading>
          <Text> {t("common:whatL")}</Text>
        </TextWrapper>
        <HeroCover>
          <Header color="primary">m</Header>
          <Header color="bodyContrast">w</Header>
        </HeroCover>
      </Hero>
      <Content>
        <Projects>
          <ProjectsHead>
            <Subheader> {t("common:projects")}</Subheader>
            <PrimaryButton to="/projects" rightIcon={ArrowRightS}>
              {t("common:showmore")}
            </PrimaryButton>
          </ProjectsHead>
          <ProjectsCards>
            {projects.map(({ node: project }) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </ProjectsCards>
        </Projects>
      </Content>
    </Wrapper>
  );
};

export default Start;

const Wrapper = styled.div``;

const Hero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 55%;
  }
`;

const Heading = styled(Header)`
  margin-bottom: 0.5em;
  font-size: ${fontSizes["2xl"]};
  @media (min-width: ${breakpoints.xl}) {
    font-size: ${fontSizes["3xl"]};
  }
`;

const HeroCover = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    display: flex;
    justify-content: center;
    width: 40%;
    ${Header} {
      font-size: 5em;
    }
  }
`;

const Content = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Projects = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 55%;
    margin-top: 0;
  }
`;

const ProjectsHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectsCards = styled.div`
  margin-top: 0.5em;
  display: grid;
  gap: 0.5em;
`;
