import { StylesConfig } from "react-select";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";
import SubmitInput from "../../../../styles/shared/inputs/SubmitInput";
import { colors, fontFamilies } from "../../../../styles/variables";

interface MyOptionType {
  value: string;
  label: string;
}

type IsMulti = false;

const selectStyles: StylesConfig<MyOptionType, IsMulti> = {
  option: (provided, state) => ({
    ...provided,
    padding: "2px 10px",
    color: state.isFocused ? "white" : "#3d3d3d",
    backgroundColor: state.isFocused ? "#74A1FF" : "#f9f9f9",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "24px",
    fontFamily: '"Exo", sans-serif',
  }),
  container: () => ({
    display: "inline-block",
    position: "relative",
  }),
  control: (provided, state) => ({
    ...provided,
    background: "#f9f9f9",
    borderRadius: "3px",
    padding: "0.2rem",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "24px",
    fontFamily: `${fontFamilies.exo}`,
    outline: "none",
    width: 220,
    boxShadow: state.isFocused ? `0 0 0 1px ${colors.blue}` : "none",
    border: state.isFocused
      ? `1px solid ${colors.blue}`
      : `1px solid rgba(166, 166, 166, 0.7)`,
    "&:hover": {
      borderColor: `1px solid rgba(166, 166, 166, 0.7)`,
    },
  }),
  singleValue: (provided, state) => {
    const opacity = 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
};

const FormWrap = styled.div`
  display: inline-block;
  background: #f9f9f9;
  border-radius: 3px;
  padding: 2rem 3rem;
  margin: 0 1.5rem 4rem;
`;

const QueryInput = styled.input`
  background: white;
  border: 1px solid rgba(166, 166, 166, 0.7);
  border-radius: 3px;
  padding: 8px 10px;
  margin: 0 2rem;
  display: inline-block;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  font-family: "Exo", sans-serif;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${colors.blue};
    border: 1px solid ${colors.blue};
  }
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
    margin: 1rem 0;
  }
`;

const Submit = styled(SubmitInput)`
  border: none;
  padding: 1rem 1.5rem 1rem;
  line-height: 20px;
  height: 42px;
  cursor: pointer;
`;

export { FormWrap, QueryInput, Submit, selectStyles };
