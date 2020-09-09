import styled from "styled-components";

import { Subheader, Subtitle, Github, Icon, TertiaryButton } from "components";

import { ArrowDownS } from "icons";
import { card2 } from "styles/common";

const Hero = ({ project, github }) => {
  const { fields: buildWith } = project.body[0];
  return (
    <Wrapper>
      <HeroImgWrapperMobile>
        <HeroImg src={project.cover.url} alt="mobileCover" />
      </HeroImgWrapperMobile>
      <Info>
        <InfoText>
          <Subheader>{project.name}</Subheader>
          <Description color="bodyContrast">{project.headline}</Description>
        </InfoText>
        <Github repo={github} />
        <Techs>
          {buildWith.map(({ type, icon }) => (
            <Tech key={type} leftIcon={icon}>
              {type}
            </Tech>
          ))}
        </Techs>
      </Info>
      <HeroImgWrapperDesktop>
        <HeroImg src={project.cover.url} alt="desktopCover" />
      </HeroImgWrapperDesktop>
      <ArrowDown path={ArrowDownS} />
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    min-height: calc(94vh - 7em);
  }
`;

const Info = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 40%;
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

const HeroImgWrapperMobile = styled.div`
  display: block;
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const HeroImg = styled.img`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 40vw;
  }
`;

const HeroImgWrapperDesktop = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    width: 50%;
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
