import { useState } from "react";
import styled from "styled-components";
import { ButtonText } from "./Typography";

import { card2 } from "styles/common";
import { colors } from "styles";

type FilterProps = {
  name: string;
  callback: Function;
};

interface CardProps {
  selected: boolean;
}

const Filter = ({ name, callback, ...rest }: FilterProps) => {
  const [selected, setSelected] = useState(false);

  const select = (name: string) => {
    setSelected(!selected);
    callback(name);
  };

  return (
    <Card selected={selected} onClick={() => select(name)} {...rest}>
      <ButtonText>{name}</ButtonText>
    </Card>
  );
};

export default Filter;

const Card = styled.button<CardProps>`
  ${card2}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${(p) => (p.selected ? `1px solid ${colors.primary}` : null)};
  padding: 0 1em;
  height: 2.5em;
  cursor: pointer;
`;
