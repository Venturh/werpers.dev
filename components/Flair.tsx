import styled from "styled-components";
import Icon from "./Icon";
import { card2 } from "styles";
import { ButtonText } from "./Typography";

type FlairProps = {
  icon?: string;
  type?: string;
  iconSize?: string;
  style?: React.CSSProperties;
};

const Flair = ({ icon, type, iconSize, style }: FlairProps) => {
  return (
    <Wrapper style={style}>
      {icon && <Icon path={icon} color="primary" size={iconSize} />}
      {type && <ButtonText style={{ marginLeft: "1em" }}>{type}</ButtonText>}
    </Wrapper>
  );
};

export default Flair;

const Wrapper = styled.div`
  ${card2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75em;
  padding: 0.4em;
`;
