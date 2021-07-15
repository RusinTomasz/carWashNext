import Head from "next/head";
import React, { useRef, createRef, RefObject, MutableRefObject } from "react";
import BreadcrumbsComponent from "../../../app/components/breadcrumbs/Breadcrumbs";
import PressureWasherType from "../../../app/types/PressureWasher";
import axios from "axios";
import Container from "../../../app/styles/shared/Container";
import PressureWashers from "../../../app/components/pressureWashers/PressureWashers";
import PressureWashersTable from "../../../app/components/pressureWashersTable/PressureWashersTable";
import styled from "styled-components";
import { breakpoints, maxWidth } from "../../../app/styles/breakpoints";

interface PressureWashersProps {
  pressureWashers: PressureWasherType[];
  isPressureWashesError: boolean;
}

const PageTitle = styled.h1`
  margin-top: 6rem;
  ${maxWidth(breakpoints.sm)} {
    margin-top: 4rem;
    font-size: 26px;
    line-height: 38px;
  }
`;

const PageIntro = styled.p`
  text-align: justify;
`;

const PressureWashersPage = (props: PressureWashersProps) => {
  const { pressureWashers } = props;
  const arrLength = pressureWashers.length;

  const elRefs = useRef<Array<HTMLDivElement | RefObject<unknown>>>([]);

  if (elRefs.current.length !== arrLength) {
    elRefs.current = Array(arrLength)
      .fill(undefined)
      .map((_, i) => elRefs.current[i] || createRef());
  }
  const executeScroll = (ref: MutableRefObject<HTMLDivElement>) =>
    ref.current.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <>
      <Head>
        <title>Myjki ciśnieniowe ranking - rankingmyjni.pl</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>
      <main>
        <BreadcrumbsComponent />
        <Container>
          <PageTitle>
            Ranking Myjek Ciśnieniowych 2021 – Jaką myjkę ciśnieniową Kupić?
          </PageTitle>
          <PageIntro>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nam adipiscing. Praesent egestas neque eu
            enim. Donec elit libero, sodales nec, volutpat a, suscipit non,
            turpis. Donec interdum, metus et hendrerit aliquet, dolor diam
            sagittis ligula, eget egestas libero turpis vel mi. Phasellus a est.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Ut tincidunt tincidunt erat. Donec mi odio,
            faucibus at, scelerisque quis, convallis in, nisi. Vivamus elementum
            semper nisi. Vivamus aliquet elit ac nisl. Nam eget dui. Sed
            fringilla mauris sit amet nibh. Etiam feugiat lorem non metus.
            Nullam cursus lacinia erat. Nam ipsum risus, rutrum vitae,
            vestibulum eu, molestie vel, lacus. Vivamus quis mi. Morbi
            vestibulum volutpat enim. Curabitur blandit mollis lacus. Etiam
            rhoncus.
          </PageIntro>
          {pressureWashers && (
            <>
              <PressureWashersTable
                elRefs={elRefs}
                pressureWashers={pressureWashers}
                executeScroll={executeScroll}
              />
              <PressureWashers
                elRefs={elRefs}
                pressureWashers={pressureWashers}
              />
            </>
          )}
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps() {
  interface Props {
    pressureWashers: PressureWasherType[];
    isPressureWashesError: boolean;
  }

  const props: Props = {
    pressureWashers: [],
    isPressureWashesError: false,
  };

  try {
    const pressureWashersResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/pressure-washers?_limit=6000`
    );
    props.pressureWashers = pressureWashersResponse.data;
  } catch (err) {
    props.isPressureWashesError = true;
    console.log(err);
  }

  return {
    props: {
      pressureWashers: props.pressureWashers,
      isPressureWashesError: props.isPressureWashesError,
    },
    revalidate: 86400,
  };
}

export default PressureWashersPage;
