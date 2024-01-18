export const theme = {
  space: {
    small: "12px",
    medium: "18px",
    large: "24px",
  },
  colors: {
    darkBlue: "#242a38",
    red: "#e81933",
    white: "#ffffff",
    blue: "#063048",
    darkGray: "#555555",
    lightGray: "#e8edec",
    lightBlue: "#2494ef",
    gray: "#f9f9f9",
    lighterGray: "#f4f5f9",
    green: "#58be72",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  font: {
    small: "12px",
    medium: "16px",
    large: "18px",
  },
};

export type Theme = typeof theme & Jss.Theme;
