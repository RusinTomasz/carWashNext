import styled from "styled-components";
import { colors } from "../../variables";

interface CheckboxLabelProps {
  isCheckboxChecked: boolean;
  color?: "white";
}

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  padding-top: 1rem;
  padding-left: 5rem;
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.color ? props.color : colors.default)};
  &::before {
    content: "";
    position: absolute;
    top: 1.3rem;
    left: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    background-color: white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3rem;

    background-image: ${(props) =>
      props.isCheckboxChecked ? "url('/img/svg/checkbox.svg')" : "none"};
  }
`;

const CheckboxDescription = styled.div`
  font-size: 12px;
  line-height: 16px;
  max-width: 600px;
`;

export { CheckboxDescription, CheckboxInput, CheckboxLabel };
