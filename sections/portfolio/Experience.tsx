import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import { ExperienceCard, Subheader } from "components";
import { breakpoints, colors } from "styles";

const Experience = ({ experiences }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subheader style={{ alignSelf: "center", marginBottom: "0.5em" }}>
        {t("common:experience")}
      </Subheader>
      <LineWrapper>
        <Experiences>
          {experiences.map(({ node: experience }) => (
            <StyledTimelineCards key={experience.name}>
              <Circle />
              <ExperienceCard {...experience} />
            </StyledTimelineCards>
          ))}
        </Experiences>
      </LineWrapper>
    </Wrapper>
  );
};

export default Experience;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.75em;
  @media (min-width: ${breakpoints.lg}) {
    align-items: flex-start;
    padding-left: 2em;
    width: 55%;
  }
`;

const Experiences = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1em;

  @media (min-width: ${breakpoints.xl}) {
    width: 100%;
    grid-gap: 1.5em;
  }
`;

const StyledTimelineCards = styled.div`
  display: flex;
  //line
  &:not(:last-child):before {
    content: "";
    position: relative;
    width: 2px;
    background-color: ${colors.primary};
    border-radius: 2px;
    top: 50%;
    margin: 1em 0.25em 0 0.25em;
  }

  &:last-child::before {
    content: "";
    position: relative;
    width: 2px;
    border-radius: 2px;
    top: 50%;
    margin: 1em 0.25em 0 0.25em;
  }

  @media (min-width: ${breakpoints.lg}) {
    &:not(:last-child):before {
      width: 3px;
      top: 55%;
      margin: 1em 0em 0.5em 0em;
      right: 2em;
    }
    &:last-child::before {
      width: 3px;
      margin: 0;
    }
  }
`;

const LineWrapper = styled.span`
  width: 100%;
  //circle
  span {
    align-self: center;
    position: relative;
    left: -9px;
  }
  @media (min-width: ${breakpoints.lg}) {
    span {
      position: relative;
      left: calc(-2em - 7.5px);
    }
  }
`;

const Circle = styled.div`
  align-self: center;
  position: relative;
  left: -9px;
  background: ${colors.primary};
  border-radius: 100%;
  width: 9px;
  height: 9px;
  @media (min-width: ${breakpoints.lg}) {
    width: 12.5px;
    height: 12.5px;
    position: relative;
    left: calc(-2em - 7.5px);
  }
`;
