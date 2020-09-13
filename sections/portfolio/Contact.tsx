import styled from "styled-components";
import { useTranslation } from "next-translate";
import { PrimaryButton, Subheader, Text } from "components";

import { Chat } from "icons";
import { breakpoints, card3 } from "styles";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Subheader>{t("common:contactHeader")}</Subheader>
      <Text>{t("common:contactBody")}</Text>
      <ChatButton
        out
        to="mailto:contact@maxwerpers.me"
        color="primaryContrast"
        leftIcon={Chat}
      >
        Chat
      </ChatButton>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  ${card3};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;

  ${Subheader} {
    text-align: center;
  }
  ${Text} {
    margin: 0.5em 0 1em 0;
    @media (min-width: ${breakpoints.lg}) {
      text-align: center;
    }
  }
`;
const ChatButton = styled(PrimaryButton)`
  width: 100%;
  justify-content: center;
  @media (min-width: ${breakpoints.lg}) {
    width: 12em;
  }
`;
