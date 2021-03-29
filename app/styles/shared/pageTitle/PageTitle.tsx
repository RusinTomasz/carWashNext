import styled from "styled-components";
import Styles from "./styles";

interface PageTitleProps {
  type?: "primary" | "secondary";
}

const PageTitle = styled.h1<PageTitleProps>`
  position: relative;
  ${(props) => (props.type ? Styles[props.type] : Styles["primary"])}
`;

export default PageTitle;
