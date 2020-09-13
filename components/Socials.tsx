import { socials } from "content";
import styled from "styled-components";
import { TertiaryButton } from "./Button";
import { breakpoints } from "styles";
const Socials = () => (
  <SocialsCards>
    {socials.map(({ name, icon, link }) => (
      <TertiaryButton out key={link} leftIcon={icon} to={link}>
        {name}
      </TertiaryButton>
    ))}
  </SocialsCards>
);

export default Socials;

const SocialsCards = styled.div`
  display: grid;
  gap: 0.5em;
  margin-top: 0.5em;
  grid-template-rows: repeat(4, 4em);
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 3em);
  }
`;
