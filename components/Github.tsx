import styled from "styled-components";

import { ButtonText, Subtitle, Text } from "./Typography";
import { PrimaryButton, SecondaryButton } from "./Button";
import Icon from "./Icon";
import Shape from "./Shape";

import { Github, Star } from "icons";
import { card1 } from "styles/common";

const GithubCard = ({ repo }) => {
  const {
    html_url,
    full_name,
    description,
    homepage,
    language,
    stargazers_count,
  } = repo || {};

  const languageColors = {
    Vue: "#2C3E50",
    TypeScript: "#2B7489",
    JavaScript: "#F1E05A",
  };
  return (
    <Card>
      <Tag>
        <LanguageIndicator>
          <Shape
            bg={languageColors[language]}
            width="0.5em"
            height="0.5em"
            borderRadius="100%"
          />
          <ButtonText color="bodyContrast">{language}</ButtonText>
        </LanguageIndicator>
        <StarWrapper>
          <Icon
            style={{ marginRight: "0.1em" }}
            color="bodyContrast"
            size="0.85em"
            path={Star}
          />
          <ButtonText color="bodyContrast">{stargazers_count}</ButtonText>
        </StarWrapper>
      </Tag>

      <Subtitle color="bodyContrast" fontWeight="bold">
        {full_name}
      </Subtitle>
      <StyledDescription text={description} />
      <ButtonWrapper>
        <PrimaryButton out to={html_url} iconSize="1.2em" leftIcon={Github}>
          Github
        </PrimaryButton>
        {homepage ? (
          <SecondaryButton style={{ marginLeft: "0.5em" }} out to={homepage}>
            Live-Demo
          </SecondaryButton>
        ) : null}
      </ButtonWrapper>
    </Card>
  );
};

export default GithubCard;

const Card = styled.div`
  ${card1};
  padding: 1em;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1.25em;
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LanguageIndicator = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 0.25rem;
  }
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`;

const StyledDescription = styled(Text)`
  overflow: hidden;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
`;
