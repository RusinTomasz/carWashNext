interface Breakpoints {
  sm: "576";
  md: "768";
  lg: "992";
  xl: "1200";
}

const breakpoints: Breakpoints = {
  sm: "576",
  md: "768",
  lg: "992",
  xl: "1200",
};

const minWidth = (breakpoint: String) => {
  return `@media (min-width: calc(${breakpoint}px + 1px))`;
};

const maxWidth = (breakpoint: String) => {
  return `@media (max-width: ${breakpoint}px)`;
};

const betweenWidth = (breakpointMin: String, breakpointMax: String) =>
  `@media (max-width: ${breakpointMax}px) and (min-width: calc(${breakpointMin}px + 1px))`;

export { minWidth, maxWidth, betweenWidth, breakpoints };
