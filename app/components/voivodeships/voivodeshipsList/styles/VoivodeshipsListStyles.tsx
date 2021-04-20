import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../../styles/breakpoints";
import { colors } from "../../../../styles/variables";

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  width: 25%;

  ${maxWidth(breakpoints.sm)} {
    width: 50%;
  }
`;

const ListItemLink = styled.a`
  padding: 5px 10px;
  ${maxWidth(breakpoints.sm)} {
    font-size: 12px;
  }
  &:hover {
    background-color: ${colors.yellow};
  }
`;

export { List, ListItem, ListItemLink };
