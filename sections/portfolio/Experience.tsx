import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import { ExperienceCard, Subheader } from "components";
import { breakpoints, colors } from "styles";
import Shape from "components/Shape";

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
              <Circle tbg="primary" />
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
  align-items:center;
  height: 100%;
  //line
  &:not(:last-child):before {
    content: "";
    background-color: ${colors.primary};
    height: 70%;
    position: relative;
    top: 50%;
    border-radius: 2px;
    width: 2px;
    margin: 1em 0.25em 0 0.25em;
  }

  &:last-child::before {
    content: "";
    width: 2px;
    margin: 1em 0.25em 0 0.25em;
  }

  @media (min-width: ${breakpoints.lg}) {
    &:not(:last-child):before {
      width: 3px;
      margin: 1em 0em 0.25em 0em;
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
    position: relative;
    left: -9px;
  }
  @media (min-width: ${breakpoints.lg}) {
    span {
      left: calc(-2em - 7.5px);
    }
  }
`;

const Circle = styled(Shape)`
  background: ${colors.primary};
  border-radius: 100%;
  width: 9px;
  height: 9px;
  @media (min-width: ${breakpoints.lg}) {
    width: 12.5px;
    height: 12.5px;
  }
`;
