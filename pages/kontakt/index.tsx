import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ContactForm from "../../app/components/forms/contactForm";
import { breakpoints, maxWidth } from "../../app/styles/breakpoints";
import Container from "../../app/styles/shared/Container";
import FlexWrapper from "../../app/styles/shared/FlexWrapper";
import BreadcrumbsComponent from "../../app/components/breadcrumbs/Breadcrumbs";

const Contact = styled(Container)`
  margin-top: 8rem;
  ${maxWidth(breakpoints.lg)} {
    margin-top: 3rem;
  }
`;

const LeftColumn = styled.div`
  width: 40%;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  width: calc(60% - 10rem);
  padding-left: 10rem;
  ${maxWidth(breakpoints.lg)} {
    width: 100%;
    padding-left: 0;
  }
`;

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <BreadcrumbsComponent />
        <Contact>
          <FlexWrapper wrap="wrap">
            <LeftColumn>
              <h1>Kontakt</h1>
              <p>
                Nie znalazłeś tego czego szukasz? Chciałbyś coś dodać / usunąć
                na temat swojej myjni ? Skontaktuj się z nami, a wspólnie
                znajdziemy rozwiązanie.
              </p>
            </LeftColumn>
            <RightColumn>
              <h2>Formularz kontaktowy</h2>
              <ContactForm />
            </RightColumn>
          </FlexWrapper>
        </Contact>
      </main>
    </>
  );
};

export default ContactPage;
