import styled from "styled-components";

import Icon from "./Icon";
import { ButtonText, Text } from "./Typography";

import { Location } from "icons";
import { card3 } from "styles";

const ExperienceCard = ({ type, name, place, time }) => (
  <Card>
    <TypeTime>
      <ButtonText color="primary" text={type} />
      <ButtonText text={time} />
    </TypeTime>
    <Info text={name} />
    <Place>
      <Icon color="bodyContrast" height="0.75em" path={Location} />
      <ButtonText style={{ marginLeft: "0.1em" }} text={place} />
    </Place>
  </Card>
);

export default ExperienceCard;

const Card = styled.div`
  ${card3}
  width: 100%;
  padding: 0.75em;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    :hover {
      transform: scale(1.1) translateY(-10px);
      cursor: default;
    }
  }
`;

const TypeTime = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled(Text)`
  margin-top: 0.5em;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: 1em;
  }
`;

const Place = styled.div`
  display: flex;
  margin-top: 0.5em;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    align-self: flex-end;
  }
`;
