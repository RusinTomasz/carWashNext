import styled from "styled-components";
import { colors } from "../../../../styles/variables";

const PhoneWrap = styled.div`
  margin-top: 2rem;
`;

const PhoneNumberLink = styled.a`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 21px;
  line-height: 28px;
  color: ${colors.lightBlue};
  padding-left: 3rem;
  background-repeat: no-repeat;
  background-size: 2rem;
  background-position: 0 50%;
  background-image: url("/img/carWash/phone-blue-icon.svg");
`;

export { PhoneWrap, PhoneNumberLink };
