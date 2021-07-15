import React, { RefObject } from "react";
import PressureWasherType from "../../types/PressureWasher";
import Link from "next/link";
import Image from "next/image";
import {
  SubTitle,
  TableWrap,
  TitlePara,
  TableItem,
  ImageWrap,
  TitleWrap,
  ScoreWrap,
  ReviewWrap,
  ShopLinksWrap,
  TitleLabel,
  Title,
  ScoreLabel,
  Score,
  ScoreValue,
  ScoreSuffix,
  ReviewButton,
  LinkWrap,
  ShopLink,
} from "./styles/PressureWashersTableStyles";

interface PressureWashersTableProps {
  pressureWashers: PressureWasherType[];
  elRefs: React.MutableRefObject<(HTMLDivElement | RefObject<unknown>)[]>;
  executeScroll: (ref: any) => any;
}

const linkColors: ["blue", "green", "red"] = ["blue", "green", "red"];

const PressureWashersTable = (props: PressureWashersTableProps) => {
  const { pressureWashers, elRefs, executeScroll } = props;

  return (
    <TableWrap>
      <SubTitle>Szybkie Porównanie Myjek Ciśnieniowych</SubTitle>
      <TitlePara>
        Poniższa porównywarka myjek ciśnieniowych przedstawia szybki podgląd na
        najlepsze modele na rynku będące w naszym aktualnym zestawieniu top 20.
      </TitlePara>
      {pressureWashers.map((pressureWasher, index) => {
        return (
          <TableItem wrap={"wrap"} alignItems="center" key={pressureWasher.id}>
            <ImageWrap>
              <Image
                src={`http://localhost:1337${pressureWasher.image.url}`}
                alt={pressureWasher.image.alternativeText}
                layout="fill"
                objectFit="contain"
              />
            </ImageWrap>
            <TitleWrap>
              <div>
                <TitleLabel>{index + 1} Miejsce</TitleLabel>
                <Title>Karcher K5 Full Control Home</Title>
              </div>
            </TitleWrap>
            <ScoreWrap>
              <div>
                <ScoreLabel>Ocena:</ScoreLabel>
                <Score>
                  <ScoreValue>{pressureWasher.score.toFixed(1)} </ScoreValue>
                  <ScoreSuffix> / 10</ScoreSuffix>
                </Score>
              </div>
            </ScoreWrap>
            <ReviewWrap>
              <ReviewButton
                onClick={() => executeScroll(elRefs.current[index])}
              >
                Recenzja
              </ReviewButton>
            </ReviewWrap>
            {pressureWasher.shopLinks && (
              <ShopLinksWrap>
                {pressureWasher.shopLinks.map((shopLink, index) => {
                  return (
                    <LinkWrap key={shopLink.id} textAlignSm="left">
                      <Link href={shopLink.url} passHref>
                        <ShopLink backgroundColor={linkColors[index]}>
                          {shopLink.linkName}
                        </ShopLink>
                      </Link>
                    </LinkWrap>
                  );
                })}
              </ShopLinksWrap>
            )}
          </TableItem>
        );
      })}
    </TableWrap>
  );
};

export default PressureWashersTable;
