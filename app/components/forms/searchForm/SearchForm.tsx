import React, { SyntheticEvent } from "react";
import {
  selectStyles,
  FormWrap,
  QueryInput,
  Submit,
} from "./styles/SearchFormStyles";
import Select from "react-select";
import InputEvent from "../../../types/InputEvent";
import { SelectType } from ".";


interface SearchFormProps {
  selectOptions: {
    value: string;
    label: string;
  }[];
  selectedType: SelectType;
  query: string;
  handleSubmit: (evt: SyntheticEvent) => void;
  handleOnChangeSelect: (selectedType: SelectType) => void;
  handleOnQueryChange: (evt: InputEvent) => void;
}

const SearchForm = (props: SearchFormProps) => {
  const {
    selectOptions,
    selectedType,
    query,
    handleSubmit,
    handleOnChangeSelect,
    handleOnQueryChange,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <FormWrap>
        <Select
          instanceId="select-search-form-refrence"
          value={selectedType}
          onChange={handleOnChangeSelect}
          options={selectOptions}
          styles={selectStyles}
          className="react-select-container"
          classNamePrefix="react-select"
        />
        <label className="search-label-query" htmlFor="search-input">
          <QueryInput
            className="query-input"
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Szukaj..."
            onChange={handleOnQueryChange}
          />
        </label>
        <Submit
          backgroundColor="blue"
          color="white"
          font="teko"
          type="submit"
          value="Wyszukaj"
        />
      </FormWrap>
    </form>
  );
};

export default SearchForm;
