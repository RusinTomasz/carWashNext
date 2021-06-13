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
import CarWashType from "../../../types/CarWash";

interface PromotedItemsPorps {
  promotedCarWashes: CarWashType[];
}

const PromotedItems = (props: PromotedItemsPorps) => {
  const { promotedCarWashes } = props;

  return (
    <>
      {promotedCarWashes.map((carWash, index) => {
        return (
          <PromotedItem key={index}>
            <PromotedItemContent>
              <Name>{carWash.name}</Name>
              <PromotedImageWrap>
                <Image
                  src={carWash.image_from_maps}
                  layout="fill"
                  objectFit="cover"
                />
              </PromotedImageWrap>
              <CityWrap>
                <City>{carWash.city}</City>
              </CityWrap>
              <ActionLinkWrap>
                <Link
                  href={`/autodetailing/${carWash.voivodeship_slug}/${carWash.city_slug}/${carWash.slug}`}
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
      })}
    </>
  );
};

export default PromotedItems;
