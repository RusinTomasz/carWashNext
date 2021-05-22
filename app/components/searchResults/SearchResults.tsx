import React from "react";
import CarWashType from "../../types/CarWash";
import CarWashesList from "../carWash/carWashesList/CarWashesList";

interface SearchResultsProps {
  searchResults: CarWashType[];
  loading: boolean;
  startingIndex: number;
  queryType: any;
}

const SearchResults = (props: SearchResultsProps) => {
  const { searchResults, loading, startingIndex, queryType } = props;
  return (
    <>
      {searchResults && searchResults.length > 0 && (
        <CarWashesList
          type={queryType}
          startingIndex={startingIndex}
          loading={loading}
          carWashes={searchResults}
        />
      )}
      {searchResults && searchResults.length === 0 && (
        <p>Brak wyników wyszukiwania, proszę spróbować pod inną nazwą.</p>
      )}
    </>
  );
};

export default SearchResults;
