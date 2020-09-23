import { css } from "styled-components";
import { colors } from ".";

export const card1 = css`
  background-color: ${colors.body};
  color: ${colors.bodyContrast};
  border-radius: 0.75em;
  box-shadow: 0px 6px 5px 2px rgba(0, 0, 0, 0.25);
`;

export const card2 = css`
  background-color: ${colors.body};
  border-radius: 1em;
  border: 2px solid ${colors.card};
`;

export const card3 = css`
  /* background-color: ${colors.bodyTint};

  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); */

  background-color: ${colors.card};
  border-radius: 1em;
`;
