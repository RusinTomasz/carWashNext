import { css } from "styled-components";
import { colors } from "../../variables";

const secondary = css`
  padding: 100px 0 100px 180px;

  &::before {
    content: "";
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border: 20px solid ${colors.orange};
    z-index: -1;
  }
`;

const primary = css`
  padding: 0 0 0 100px;

  &::before {
    content: "";
    box-sizing: border-box;
    width: 85px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${colors.red};
  }
`;

export default { primary, secondary };
