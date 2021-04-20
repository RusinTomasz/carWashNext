import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../styles/breakpoints";
import BasicButton from "../../../styles/shared/buttons/BasicButton";
import Container from "../../../styles/shared/Container";

const VoivodeshipsWrap = styled(Container)`
  margin-top: 6rem;

  ${maxWidth(breakpoints.sm)} {
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const ButtonsWrap = styled.div`
  margin: 3rem 0;
  text-align: center;
  ${maxWidth(breakpoints.sm)} {
    margin: 1rem 0;
  }
`;

const TypeButton = styled(BasicButton)`
  margin: 0 1rem;
  ${maxWidth(breakpoints.sm)} {
    margin: 0.5rem 1.5rem 0.5rem 0;
  }
`;

export { VoivodeshipsWrap, Title, ButtonsWrap, TypeButton };
