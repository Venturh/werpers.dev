import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Icon from "./Icon";
import { Caption, Subtitle, Text } from "./Typography";

import { ArrowDownS, ArrowUpS } from "icons";
import { card3 } from "styles";
import Button from "./Button";
import useResizeEffect from "hooks/useResizeEffect";

type SkillCardProps = {
  toggle: boolean;
};

const SkillCard = ({ title, skills }) => {
  const [open, setOpen] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const skillsRef = useRef<HTMLElement | null>(null);

  const checkOverflow = useCallback(() => {
    if (!skillsRef.current) return;
    const { scrollHeight } = skillsRef.current;
    setOverflow(scrollHeight > 47);
  }, [skillsRef, open]);

  useResizeEffect(checkOverflow, [skillsRef]);

  return (
    <Card toggle={open}>
      <Type style={{ marginLeft: "0.5em" }}>{title}</Type>
      <Skills toggle={open}>
        {skills.map((skill) => (
          <Skill
            ref={(ref) => {
              if (ref) {
                skillsRef.current = ref;
              }
            }}
            key={skill.name}
          >
            <Icon color="primary" size="1.5em" path={skill.icon} />

            <Caption style={{ paddingTop: "0.25em" }}>{skill.name}</Caption>
          </Skill>
        ))}
      </Skills>
      {!overflow ? (
        <Button
          onClick={() => setOpen(!open)}
          leftIcon={open ? ArrowUpS : ArrowDownS}
          color="bodyContrast"
          iconSize="2em"
        />
      ) : (
        <Place />
      )}
    </Card>
  );
};

export default SkillCard;

const Card = styled.div<SkillCardProps>`
  ${card3}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(p) => (p.toggle ? "8em" : "4em")};
  transition: height 0.15s ease-out;
`;

const Type = styled(Text)`
  width: 30%;
`;

const Skills = styled.div<SkillCardProps>`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 3em);
  grid-template-rows: ${(p) => (p.toggle ? "auto" : "100%")};
  grid-auto-columns: 0;
  justify-content: flex-end;
  overflow-y: hidden;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Place = styled.div`
  padding: 0.5em;
`;
