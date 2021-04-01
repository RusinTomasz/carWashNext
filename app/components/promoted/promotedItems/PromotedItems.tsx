import React from "react";
import Link from "next/link";
import Image from "next/image";

//Styles
import styled from "styled-components";
import { maxWidth, breakpoints } from "../../../styles/breakpoints";
import ActionLink from "../../../styles/shared/links/ActionLink";

const PromotedItem = styled.article`
  width: 33.33%;
  padding: 0 1.5rem;
  ${maxWidth(breakpoints.md)} {
    width: 50%;
  }
  ${maxWidth(breakpoints.sm)} {
    width: 100%;
  }
`;

const PromotedItemContent = styled.div`
  padding: 1.5rem 0 4rem;
  background-color: #f9f9f9;
  border-radius: 3px;
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const Name = styled.h3`
  padding: 0 1.5rem;
  min-height: 100px;
  display: flex;
  align-items: center;
`;

const CityWrap = styled.div`
  padding: 0 1.5rem;
`;

const City = styled.p`
  padding: 1rem 1.5rem 1rem 5.5rem;
  background-image: url("/img/promoted/promoted-icon.svg");
  background-position: 0 50%;
  background-size: 4rem;
  background-repeat: no-repeat;
  font-weight: 500;
`;

const PromotedImageWrap = styled.div`
  position: relative;
  height: 240px;
`;

const ActionLinkWrap = styled.div`
  text-align: center;
`;

const PromotedItems = (props) => {
  //   state = {
  //     carWashes: [],
  //     loading: true,
  //     error: null,
  //   };

  //   componentDidMount() {
  //     const BASE_URL =
  //       "https://rankingmyjni.co.pl/jsonapi/node/car_wash?filter[promote]=1&filter[field_type][condition][path]=field_type.name&filter[field_type][condition][operator]=%3D&filter[field_type][condition][value]=autospa";
  //     AxiosCarWashAPI.getAll(BASE_URL)
  //       .then((results) => results.data)
  //       .then((carWashes) => this.setState({ carWashes }))
  //       .catch((error) => this.setState({ error }))
  //       .finally(() => this.setState({ loading: false }));
  //   }

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
