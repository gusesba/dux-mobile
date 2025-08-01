// Cores baseadas no arquivo colors.css
export const colors = {
  primary: "#4DD698",
  black: "#0A0A0A",
  white: "#FFFFFF",
  grey: "#202020",
  lightgrey: "#959595",
  yellow: "#FFD93D",
  red: "#FF6B6B",
  darkGrey: "#333",
} as const;

export type ColorKey = keyof typeof colors; 