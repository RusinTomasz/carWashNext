import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchResults from "../../app/components/searchResults/SearchResults";
import SearchForm from "../../app/components/forms/searchForm";
import Container from "../../app/styles/shared/Container";
import Query from "../../app/types/Search";
import paginationUtils from "../../app/utils/paginationUtils";
import CarWashType from "../../app/types/CarWash";
import {
  fetchSearchResults,
  generateApiSearchUrls,
} from "../../app/api/searchApi";
import Pagination from "../../app/components/pagination/Pagination";
import FlexWrapper from "../../app/styles/shared/FlexWrapper";
import LoadingSpinner from "../../app/components/loaders/LoadingSpinner";

interface SearchResultsInterface {
  data: CarWashType[];
  numberOfSearchResults: number;
  err: string;
}

const SearchPage = () => {
  const router = useRouter();
  const { query }: { query: Query } = router;
  const resultsLimit = 10;

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [queryType, setQueryType] = useState("");
  const [searchResults, setSearchResults] = useState<CarWashType[]>();
  const [numberOfSearchResults, setNumberOfSearchResults] = useState(0);
  const [startingIndex, setStartingIndex] = useState(0);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  useEffect(() => {
    if (router.isReady && query.q && query.type) {
      const currentPage = +query.page > 0 ? +query.page : 1 || 1;
      const startCountingIndex = paginationUtils.countStartingIndex(
        currentPage,
        resultsLimit
      );

      const apiUrls = generateApiSearchUrls(
        query.q,
        query.type,
        startCountingIndex,
        resultsLimit
      );

      setQueryType(query.type);
      setCurrentPage(currentPage);
      setStartingIndex(startCountingIndex);

      const executeQuery = async () => {
        setLoading(true);
        const results = await fetchSearchResults(
          apiUrls.searchApiUrl,
          apiUrls.countResultsApiUrl
        );
        setResultsState(results);
        setLoading(false);
      };

      executeQuery();
    }
  }, [router.isReady, query.q, query.type, query.page]);

  const setResultsState = (results: SearchResultsInterface) => {
    const { data, numberOfSearchResults, err } = results;
    if (err) {
      setErr(err);
    } else {
      setErr("");
      setSearchResults(data);
      setNumberOfSearchResults(numberOfSearchResults);
    }
  };

  const onPageChange = (page: number) => {
    const startCountingIndex = paginationUtils.countStartingIndex(
      page,
      resultsLimit
    );
    setCurrentPage(page);
    setStartingIndex(startCountingIndex);
  };

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
          
          {searchResults && (
            <>
              <SearchResults
                searchResults={searchResults}
                loading={loading}
                startingIndex={startingIndex}
                queryType={queryType}
              />
              <Pagination
                page={currentPage}
                onPageChange={onPageChange}
                count={numberOfSearchResults}
                limit={resultsLimit}
              />
            </>
          )}

          {!searchResults && loading && (
            <FlexWrapper justifyContent="center">
              <LoadingSpinner size={180} borderSize={4} />{" "}
            </FlexWrapper>
          )}

          {err && !loading && <p>{err}</p>}
        </Container>
      </main>
    </>
  );
};

export default SearchPage;
