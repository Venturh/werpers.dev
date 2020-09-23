import styled from "styled-components";
import { card3, colors } from "styles";
import Image from "./Image";
import { Text } from "./Typography";

type Props = {
  name: string;
  url: string;
  cover: { url: string };
};

const RessourceCard = ({ name, url, cover }: Props) => {
  return (
    <Card href={url} target="_blank" rel="noopener noreferrer">
      <Cover>
        <Image src={cover.url} alt="alt" />
      </Cover>
      <TextArea>
        <Text>{name}</Text>
      </TextArea>
    </Card>
  );
};

export default RessourceCard;

const Card = styled.a`
  ${card3}
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cover = styled.div`
  max-height: 80%;
  min-height: 80%;
  max-width: 80%;
  min-width: 80%;
  margin-bottom: 0.5em;
`;

const TextArea = styled.div`
  width: 100%;
  text-align: center;
  color: ${colors.primaryContrast};
`;
