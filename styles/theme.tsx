export interface ITheme {
  colors: Colors;
  fontSizes: FontSizes;
  breakpoints: BreakPoints;
}

interface Colors {
  primary: string;
  primaryContrast: string;
  primaryGlow: string;
  body: string;
  bodyContrast: string;
  bodyGlow: string;
  bodyTint: string;
}

interface FontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
}

interface BreakPoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface SpacingItem {
  sides: string;
}

interface Spacing {
  lg: SpacingItem;
  md: SpacingItem;
  xs: SpacingItem;
}

export const fontSizes: FontSizes = {
  xs: "0.64em",
  sm: "0.8em",
  md: "1em",
  lg: "1.25em",
  xl: "1.56em",
  "2xl": "1.95em",
  "3xl": "2.44em",
  "4xl": "3.05em",
  "5xl": "3.81em",
};

export const breakpoints: BreakPoints = {
  sm: "576px",
  md: "768px",
  lg: "1280px",
  xl: "1920px",
};

export const colors: Colors = {
  primary: "#85EEA7",
  primaryContrast: "#292929",
  primaryGlow: "#b0fbbc",
  body: "#161821;",
  bodyContrast: "#FFFFFF",
  bodyGlow: "#272932",
  bodyTint: "#12131a",
};
export const theme: ITheme = {
  colors,
  fontSizes,
  breakpoints,
};

// export const sizes = {
//   navIcons: "1.3em",
// };

export const spacing: Spacing = {
  lg: {
    sides: "20%",
  },

  md: {
    sides: "15%",
  },

  xs: {
    sides: "5%",
  },
};
