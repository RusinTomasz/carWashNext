interface Colors {
  blue: string;
  yellow: string;
  default: string;
  orange: string;
  white: string;
  grayText: string;
  grayButton: string;
  lightBlue: string;
  barBlue: string;
  red: string;
  carWashAddress: string;
}

interface StarsRaterColors {
  starsRaterLink: string;
  starsRaterHover: string;
  starsRaterActive: string;
}

interface FontFamilies {
  teko: string;
  exo: string;
}

interface Gradients {
  redOrange: string;
}

export const colors: Colors = {
  default: "#3d3d3d",
  blue: "#74a1ff",
  yellow: "#fff50e",
  orange: "#ffd10e",
  white: "#f9f9f9",
  grayText: "#a6a6a6",
  grayButton: "#efefef",
  lightBlue: "#00bce1",
  barBlue: "#a2bffd",
  red: "#e74c3c",
  carWashAddress: "#c4c4c4",
};

export const fontFamilies: FontFamilies = {
  teko: "'Teko', sans-serif",
  exo: "'Exo', sans-serif",
};

export const gradients: Gradients = {
  redOrange:
    "linear-gradient(94deg, rgb(255, 10, 10) 0%, rgb(255, 117, 57) 100%)",
};

export const starsRaterColors: StarsRaterColors = {
  starsRaterLink: "#ffffff",
  starsRaterHover: "#fff50e",
  starsRaterActive: "#fff50e",
};
