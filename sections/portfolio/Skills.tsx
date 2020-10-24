import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { SkillCard, Subheader } from "components";

import { breakpoints } from "styles";
import { skills } from "content";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subheader style={{ alignSelf: "center", marginBottom: "0.5em" }}>
        {t("common:skills")}
      </Subheader>
      {skills.map(
        ({
          type,
          skills,
        }: {
          type: string;
          skills: { name: string; icon: string }[];
        }) => (
          <SkillCard type={t(`common:${type}`)} skills={skills} />
        )
      )}
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoints.lg}) {
    width: 40%;
  }
`;
