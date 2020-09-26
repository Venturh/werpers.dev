import styled from "styled-components";

import Icon from "./Icon";
import { Caption, Text } from "./Typography";

import { card3 } from "styles";

const SkillCard = ({ title, skills }) => (
  <Card>
    <Text>{title}</Text>
    <Skills>
      {skills.map((skill: { icon: string; name: string }) => (
        <Skill key={skill.name}>
          <Icon color="primary" size="1.5em" path={skill.icon} />
          <Caption style={{ paddingTop: "0.25em" }}>{skill.name}</Caption>
        </Skill>
      ))}
    </Skills>
  </Card>
);

export default SkillCard;

const Card = styled.div`
  ${card3}
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6em;
  padding-left: 0.5em;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    height: 4em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
  }
`;

const Skills = styled.div`
  margin-top: 0.5em;
  display: flex;
`;

const Skill = styled.div`
  margin: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
