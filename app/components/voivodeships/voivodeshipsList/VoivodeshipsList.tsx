import React from "react";
import Link from "next/link";

//Styles
import styled from "styled-components";
import FlexWrapper from "../../../styles/shared/FlexWrapper";
import { maxWidth, breakpoints } from "../../../styles/breakpoints";
import { colors } from "../../../styles/variables";

interface Voivodeship {
  slug: string;
  name: string;
}

interface VoivodeshipsListProps {
  type: string;
  voivodeships: Voivodeship[];
}

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

const VoivodeshipsList = (props: VoivodeshipsListProps) => {
  return (
    <div>
      <List>
        <FlexWrapper wrap="wrap">
          {props.voivodeships.map((voivodeship, index) => (
            <ListItem key={index}>
              <Link href={`/${props.type}/${voivodeship.slug}`} passHref>
                <ListItemLink> {voivodeship.name}</ListItemLink>
              </Link>
            </ListItem>
          ))}
        </FlexWrapper>
      </List>
    </div>
  );
};

export default VoivodeshipsList;
