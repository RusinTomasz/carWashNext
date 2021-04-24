import Head from "next/head";
import React from "react";
import SearchForm from "../../app/components/forms/searchForm";
import Container from "../../app/styles/shared/Container";

interface SearchPageProps {}

const SearchPage = (props: SearchPageProps) => {
  return (
    <>
      <Head>
        <title>Wyszukaj</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <h1>Witamy na stronie wyszukiwań</h1>
          <SearchForm />
        </Container>
      </main>
    </>
  );
};

export default SearchPage;
