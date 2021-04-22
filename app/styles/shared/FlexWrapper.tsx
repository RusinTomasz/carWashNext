import styled from "styled-components";

interface FlexWrapperProps {
  justifyContent?:
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end";
  alignItems?: "center" | "stretch" | "start" | "end";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
}

const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;

export default FlexWrapper;
