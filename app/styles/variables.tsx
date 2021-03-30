interface Colors {
  blue: string;
  yellow: string;
  default: string;
  orange: string;
  white: string;
  grayText: string;
  lightBlue: string;
  barBlue: string;
  red: string;
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
  lightBlue: "#00bce1",
  barBlue: "#a2bffd",
  red: "#e74c3c",
};

export const gradients: Gradients = {
  redOrange:
    "linear-gradient(94deg, rgb(255, 10, 10) 0%, rgb(255, 117, 57) 100%)",
};
