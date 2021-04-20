import React from "react";
import Link from "next/link";
import Image from "next/image";

import ActionLink from "../../../styles/shared/links/ActionLink";
import {
  PromotedItem,
  PromotedItemContent,
  Name,
  CityWrap,
  City,
  PromotedImageWrap,
  ActionLinkWrap,
} from "./styles/PromoteditemsStyles";

const PromotedItems = (props) => {
  return props.promotedItems.map((el, index) => {
    return (
      <PromotedItem key={index}>
        <PromotedItemContent>
          {/* <Name>{el.attributes.field_name.value}</Name> */}
          <Name>Myjnia okręgowa</Name>
          <PromotedImageWrap>
            <Image
              //   src={el.attributes.field_image_from_maps.value}
              src="https://lh5.googleusercontent.com/p/AF1QipNGWV3-YIf1a8ohhb3nWmQyhRZN3LnQfk2YLztS=w408-h270-k-no"
              layout="fill"
              objectFit="cover"
            />
          </PromotedImageWrap>
          <CityWrap>
            {/* <City>{el.attributes.field_city.value}</City> */}
            <City>Warszawa</City>
          </CityWrap>
          <ActionLinkWrap>
            <Link
              //   href={`/autospa/${el.attributes.field_voivodeship_slug.value}/${el.attributes.field_city_slug.value}${el.attributes.path.alias}`}
              href="/"
              passHref
            >
              <ActionLink font="teko" backgroundColor="blue">
                Zobacz
              </ActionLink>
            </Link>
          </ActionLinkWrap>
        </PromotedItemContent>
      </PromotedItem>
    );
  });
};

export default PromotedItems;
