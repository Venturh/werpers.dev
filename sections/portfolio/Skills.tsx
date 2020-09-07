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
      {skills.map(({ type, skills }) => (
        <Section key={type}>
          <SkillCard title={t(`common:${type}`)} skills={skills} />
        </Section>
      ))}
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

const Section = styled.div`
  width: 100%;
  margin-bottom: 0.5em;
`;
