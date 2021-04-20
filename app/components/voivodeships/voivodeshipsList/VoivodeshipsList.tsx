import React from "react";
import Link from "next/link";

import FlexWrapper from "../../../styles/shared/FlexWrapper";
import { List, ListItem, ListItemLink } from "./styles/VoivodeshipsListStyles";

interface Voivodeship {
  slug: string;
  name: string;
}

interface VoivodeshipsListProps {
  type: string;
  voivodeships: Voivodeship[];
}

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
