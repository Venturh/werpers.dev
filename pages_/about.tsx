import styled from "styled-components";
import { useTranslation } from "next-translate";

import { ButtonText, Header, Layout, Text, Title } from "components";
import { colors } from "styles";

export default () => {
  const { t } = useTranslation();
  return (
    <Layout small>
      <main>
        <Header text={t("common:about")} />
        <Description>
          <Title>{t("common:aboutSub")}</Title>
          <Text>{t("common:aboutDesc")}</Text>
        </Description>
        <Cv href="/cv.pdf" download>
          <ButtonText>Download CV</ButtonText>
        </Cv>
      </main>
    </Layout>
  );
};

const Description = styled.article`
  margin: 1em 0;
`;
const Cv = styled.a`
  display: inline-flex;
  padding: 0.5em;
  background: ${colors.body};
  border: 1px solid ${colors.primary};
  ${ButtonText} {
    color: ${colors.primary};
  }

  border-radius: 0.25em;
`;
