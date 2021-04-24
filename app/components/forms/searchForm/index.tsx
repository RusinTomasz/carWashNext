import React, { SyntheticEvent, useState } from "react";
import InputEvent from "../../../types/InputEvent";
import SearchForm from "./SearchForm";

export interface SelectType {
  value: string;
  label: string;
}

const SearchFormContainer = () => {
  const [selectedType, setSelectedType] = useState<SelectType>({
    value: "autospa",
    label: "Auto spa",
  });
  const [query, setQuery] = useState("");

  const selectOptions = [
    { value: "autospa", label: "Auto spa" },
    { value: "myjniebezdotykowe", label: "Myjnie bezdotykowe" },
  ];

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log("Submit");
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
