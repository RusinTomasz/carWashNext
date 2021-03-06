import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";
import { BasicModal } from "../../styles/GlobalModalsStyles";

const Title = styled.h2`
  color: black;
  width: 100%;
  text-align: center;
  font-size: 26px;
  line-height: 32px;
`;

const StyledReviewsModal = styled(BasicModal)`
  width: 50%;
  top: 2rem;
  transform: translate(-50%, 0);
  background-color: #fff;
  box-shadow: 0 16px 32px rgb(180 180 180 / 40%);
  ${maxWidth(breakpoints.lg)} {
    width: calc(100% - 3rem);
  }
`;

const Label = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
`;

export { Title, StyledReviewsModal, Label };
