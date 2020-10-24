import styled from "styled-components";

import Icon from "./Icon";
import { Caption, Subtitle, Text, ButtonText } from "./Typography";

import { card3 } from "styles";

const SkillCard = ({ type, skills }) => (
  <Section>
    <Subtitle style={{ marginBottom: "0.5em" }}>{type}</Subtitle>
    <SkillSection>
      {skills.map(({ name, icon }) => (
        <Skill key={name}>
          <Icon color="primary" size="1.5em" path={icon} />
          <ButtonText style={{ paddingTop: "0.25em" }}>{name}</ButtonText>
        </Skill>
      ))}
    </SkillSection>
  </Section>
);

export default SkillCard;

const Section = styled.div`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    text-align: center;
  }
`;

const SkillSection = styled.div`
  margin-bottom: 0.5em;
  display: grid;
  grid-template-columns: repeat(4, 20%);

  grid-gap: 0.75em 0.5em;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 25%);
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${card3};
  border-radius: 0.75em;
  padding: 0.5em 0.2em;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0.5em 2em;
  }
`;
