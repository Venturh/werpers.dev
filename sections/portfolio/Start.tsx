import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import {
  Header,
  PrimaryButton,
  ProjectCard,
  Socials,
  Span,
  Subheader,
  Text,
} from "components";

import { breakpoints, fontSizes } from "styles";

import { ArrowRightS } from "icons";
import {
  Project,
  Projects as ProjectsInterface,
  Ressource,
  Ressources as RessourcesInterface,
} from "lib/prismic";
import RessourceCard from "components/RessourceCard";

type Props = {
  projects: ProjectsInterface;
  ressources: RessourcesInterface;
};

const Start = ({ projects, ressources }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Hero>
        <TextWrapper>
          <Heading color="bodyContrast">
            {t("common:hey")} <br />
            <Span fontSize="header" color="primary">
              Maximilian Werpers{" "}
            </Span>
          </Heading>
          <Text> {t("common:what")}</Text>
        </TextWrapper>
        <HeroCover>
          <Header color="primary">m</Header>
          <Header color="bodyContrast">w</Header>
        </HeroCover>
      </Hero>
      <Content>
        <Projects>
          <HeadWithButton>
            <Subheader> {t("common:projects")}</Subheader>
            <PrimaryButton to="/projects" rightIcon={ArrowRightS}>
              {t("common:showmore")}
            </PrimaryButton>
          </HeadWithButton>
          <ProjectsCards>
            {projects.map((project: Project, index: number) => {
              if (index <= 3) {
                return <ProjectCard key={project.name} {...project} />;
              }
            })}
          </ProjectsCards>
        </Projects>
        <SocialsBlog>
          {/* <Ressources>
            <HeadWithButton>
              <Subheader> {t("common:ressources")}</Subheader>
              <PrimaryButton to="/projects" rightIcon={ArrowRightS}>
                {t("common:showmore")}
              </PrimaryButton>
            </HeadWithButton>
            <RessourceCards>
              {ressources.map(({ node: ressource }: Ressource) => {
                return <RessourceCard key={ressource.name} {...ressource} />;
              })}
            </RessourceCards>
          </Ressources> */}
          <Social>
            <Subheader>{t("common:socialsTitle")}</Subheader>
            <Socials />
          </Social>
        </SocialsBlog>
      </Content>
    </Wrapper>
  );
};

export default Start;

const Wrapper = styled.section``;

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
  margin-top: 1em;
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
    width: 45%;
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
    width: 50%;
    margin-top: 0;
  }
`;

const HeadWithButton = styled.div`
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

const SocialsBlog = styled.div`
  @media (min-width: ${breakpoints.lg}) {
    width: 45%;
  }
`;
const Social = styled.div`
  margin-top: 2em;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: 2em;
  }
`;

const Ressources = styled.div`
  margin-top: 2em;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: 0em;
  }
`;

const RessourceCards = styled.div`
  margin-top: 0.5em;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 12em;
  gap: 0.5em;
`;
