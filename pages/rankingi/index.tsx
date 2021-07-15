import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BreadcrumbsComponent from "../../app/components/breadcrumbs/Breadcrumbs";
import Container from "../../app/styles/shared/Container";
import styled from "styled-components";
import FlexWrapper from "../../app/styles/shared/FlexWrapper";
import ActionLink from "../../app/styles/shared/links/ActionLink";
import { breakpoints, maxWidth } from "../../app/styles/breakpoints";

const PageTitle = styled.h1`
  margin-top: 5rem;
  ${maxWidth(breakpoints.sm)} {
    margin-top: 3rem;
    font-size: 28px;
    line-height: 38px;
  }
`;

const RankingsWrap = styled(FlexWrapper)`
  margin: 5rem 0;
  ${maxWidth(breakpoints.sm)} {
    margin: 3rem 0;
  }
`;

const RankingItem = styled(FlexWrapper)`
  position: relative;
  width: 50%;
  height: 400px;
  padding: 2rem 6rem;
  ${maxWidth(breakpoints.md)} {
    width: 100%;
  }
  ${maxWidth(breakpoints.sm)} {
    padding: 2rem 1.5rem;
    height: 320px;
  }
`;

const ContentWrap = styled.div`
  z-index: 1;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 26px;
  line-height: 34px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 21px;
  margin: 2rem 0;
`;

const Rankings = () => {
  return (
    <>
      <Head>
        <title>Rankingi - rankingmyjni.pl</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        <BreadcrumbsComponent />
        <Container>
          <PageTitle>Nasze Rankingi - Najnowsze rankingi 2021</PageTitle>
          <RankingsWrap>
            <RankingItem alignItems="center">
              <ContentWrap>
                <Title>Ranking myjek ciśnienowych</Title>
                <Description>
                  Sed in libero ut nibh placerat accumsan. In consectetuer
                  turpis ut velit. Suspendisse faucibus, nunc et pellentesque
                  egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                  id tortor. Praesent egestas tristique nib
                </Description>
                <Link href="/rankingi/myjki-cisnieniowe-ranking" passHref>
                  <ActionLink backgroundColor="blue" font="teko">
                    Zobacz ranking
                  </ActionLink>
                </Link>
              </ContentWrap>
              <Image
                priority={true}
                className="bg-index"
                src="/img/rankings/rank-pressure-bg-prod.jpg"
                alt="Człowiek myjący samochód myjką ciśnieniową"
                layout="fill"
                objectFit="cover"
              />
            </RankingItem>
          </RankingsWrap>
        </Container>
      </main>
    </>
  );
};

export default Rankings;
