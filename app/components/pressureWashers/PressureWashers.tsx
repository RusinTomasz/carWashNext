import Image from "next/image";
import React, { RefObject } from "react";
import PressureWasherType from "../../types/PressureWasher";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import FlexWrapper from "../../styles/shared/FlexWrapper";
import {
  PressureWasher,
  SubTitle,
  TopBar,
  TitleWrap,
  ScoreWrap,
  Title,
  Position,
  ScoreLabel,
  Score,
  ScoreValue,
  ScoreSuffix,
  ContentWrap,
  ImageWrap,
  Content,
  InitialText,
  ProsConsWrap,
  Pros,
  Cons,
  List,
  AlternativeTitle,
  FeatureListItem,
  ProsListItem,
  ConsListItem,
  ShopsWrap,
  ShopLink,
  ShopTitle,
} from "./styles/PressureWashersStyles";

interface PressureWashersProps {
  pressureWashers: PressureWasherType[];
  elRefs: React.MutableRefObject<(HTMLDivElement | RefObject<unknown>)[]>;
}
const linkColors: ["blue", "green", "red"] = ["blue", "green", "red"];

const PressureWashers = (props: PressureWashersProps) => {
  const { pressureWashers, elRefs } = props;

  return (
    <>
      <SubTitle>Myjki ciśnieniowe Ranking Top 20</SubTitle>
      {pressureWashers.map((pressureWasher, index) => {
        return (
          <PressureWasher
            key={pressureWasher.id}
            ref={elRefs.current[index] as RefObject<HTMLDivElement>}
          >
            <TopBar justifyContent="space-between" wrap="wrap">
              <TitleWrap>
                <Position>{index + 1}</Position>
                <Title>{pressureWasher.title}</Title>
              </TitleWrap>
              <ScoreWrap justifyContent="center" wrap="wrap">
                <ScoreLabel>Ocena naszego eksperta:</ScoreLabel>
                <Score>
                  <ScoreValue>{pressureWasher.score.toFixed(1)}</ScoreValue>
                  <ScoreSuffix> / 10</ScoreSuffix>
                </Score>
              </ScoreWrap>
            </TopBar>
            <InitialText>{pressureWasher.initialText}</InitialText>
            <ContentWrap wrap="wrap">
              <ImageWrap>
                <Image
                  src={`http://localhost:1337${pressureWasher.image.url}`}
                  alt={pressureWasher.image.alternativeText}
                  width={pressureWasher.image.width}
                  height={pressureWasher.image.height}
                  layout="intrinsic"
                />
              </ImageWrap>
              <Content>
                <ReactMarkdown>
                  {pressureWasher.washerDescription}
                </ReactMarkdown>
                <div>
                  <AlternativeTitle>Specyfikacja techniczna</AlternativeTitle>
                  <List>
                    {pressureWasher.features.map((feature) => (
                      <FeatureListItem key={feature.id}>
                        <ReactMarkdown>{feature.feature}</ReactMarkdown>
                      </FeatureListItem>
                    ))}
                  </List>
                </div>
              </Content>
            </ContentWrap>
            <ProsConsWrap wrap="wrap">
              <Pros>
                <AlternativeTitle>Zalety</AlternativeTitle>
                <List>
                  {pressureWasher.pros.map((advantage) => (
                    <ProsListItem key={advantage.id}>
                      {advantage.advantage}
                    </ProsListItem>
                  ))}
                </List>
              </Pros>
              <Cons>
                <AlternativeTitle>Wady</AlternativeTitle>
                <List>
                  {pressureWasher.cons.map((disadvantage) => (
                    <ConsListItem key={disadvantage.id}>
                      {disadvantage.disadvantage}
                    </ConsListItem>
                  ))}
                </List>
              </Cons>
            </ProsConsWrap>
            {pressureWasher.shopLinks && pressureWasher.shopLinks.length > 0 && (
              <ShopsWrap>
                <ShopTitle>Sprawdź ceny w sklepach</ShopTitle>
                <FlexWrapper justifyContent="center" wrap="wrap">
                  {pressureWasher.shopLinks.map((shopLink, index) => {
                    return (
                      <Link href={shopLink.url} passHref>
                        <ShopLink backgroundColor={linkColors[index]}>
                          Sprawdź Cenę w {shopLink.linkName}
                        </ShopLink>
                      </Link>
                    );
                  })}
                </FlexWrapper>
              </ShopsWrap>
            )}
          </PressureWasher>
        );
      })}
    </>
  );
};

export default PressureWashers;
