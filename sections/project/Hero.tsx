import styled from "styled-components";

import { Subheader, Subtitle, Github, Icon, TertiaryButton } from "components";

import { ArrowDownS } from "icons";
import { card2 } from "styles/common";

const Hero = ({ project, github }) => {
  console.log("Hero -> github", github);
  const lowRes = `${project.cover.url}&w=100`;
  const { fields: buildWith } = project.body[0];
  return (
    <Wrapper>
      <HeroImgWrapperMobile>
        <HeroImg
          src={`https://images.prismic.io/maxwerpers-next/a7c5142b-3be7-4166-8cda-3c5038c5be3f_yee_cover.png?lqip`}
          alt=""
        />
      </HeroImgWrapperMobile>
      <Info>
        <InfoText>
          <Subheader>{project.name}</Subheader>
          <Description color="bodyContrast">{project.headline}</Description>
        </InfoText>
        <GithubCard repo={github} />
        <Techs>
          {buildWith.map(({ type, icon }) => (
            <Tech key={type} leftIcon={icon}>
              {type}
            </Tech>
          ))}
        </Techs>
      </Info>
      <HeroImgWrapperDesktop>
        <PlaceholderImg src={lowRes} />
        <HeroImg src={project.cover.url} />
      </HeroImgWrapperDesktop>
      <ArrowDown path={ArrowDownS} />
    </Wrapper>
  );
};

export default Hero;

const PlaceholderImg = styled.img`
  width: 100%;
  filter: blur(1.5rem);
`;

const Wrapper = styled.section`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-height: calc(94vh - 7em);
  }
`;

const Info = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const InfoText = styled.div`
  margin-left: 0.75em;
`;

const Description = styled(Subtitle)`
  margin: 0.5em 0;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 90%;
  }
`;

const GithubCard = styled(Github)`
  margin: 1em 0;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 90%;
  }
`;

const HeroImgWrapperMobile = styled.div`
  display: block;
  width: 100%;
  margin: 1em auto;
  overflow: hidden;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const HeroImg = styled.img`
  width: 100vw;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 40vw;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const HeroImgWrapperDesktop = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    width: 50%;
    position: relative;
  }
`;

const Techs = styled.div`
  margin-top: 1em;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, 45%);
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 90%;
    grid-template-columns: repeat(auto-fit, 30%);
  }
`;

const Tech = styled(TertiaryButton)`
  ${card2}
`;

const ArrowDown = styled(Icon)`
  display: none;
  /* @media (min-width: ${(props) =>
    props.theme.breakpoints.md}) {
    display: block;
    fill: ${(props) =>
    props.theme.colors
      .primary};
    height: 2em;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 1.5em;
  } */
`;
