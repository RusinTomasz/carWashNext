import { useRouter } from "next/router";
import React, { SyntheticEvent, useEffect, useState } from "react";
import InputEvent from "../../../types/InputEvent";
import Query from "../../../types/Search";
import SearchForm from "./SearchForm";

export interface SelectType {
  value: string;
  label: string;
}

const SearchFormContainer = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState<SelectType>({
    value: "autospa",
    label: "Auto spa",
  });
  const { query: queryString }: { query: Query } = router;
  const selectOptions = [
    { value: "autospa", label: "Auto spa" },
    { value: "myjniebezdotykowe", label: "Myjnie bezdotykowe" },
  ];

  useEffect(() => {
    if (router.isReady) {
      if (queryString.q) {
        setQuery(queryString.q);
      }
      if (queryString.type) {
        const option = selectOptions.filter(
          (option) => option.value === queryString.type
        );
        setSelectedType(option[0]);
      }
    }
  }, [queryString.q, queryString.type]);

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    router.push({
      pathname: "/wyszukaj",
      query: { type: selectedType.value, q: query },
    });
  };

  const handleOnChangeSelect = (selectedType: SelectType) => {
    setSelectedType(selectedType);
  };

  const handleOnQueryChange = (evt: InputEvent) => {
    const value = evt.target.value;
    setQuery(value);
  };

  return (
    <SearchForm
      selectOptions={selectOptions}
      selectedType={selectedType}
      query={query}
      handleSubmit={handleSubmit}
      handleOnChangeSelect={handleOnChangeSelect}
      handleOnQueryChange={handleOnQueryChange}
    />
  );
};

export default SearchFormContainer;
