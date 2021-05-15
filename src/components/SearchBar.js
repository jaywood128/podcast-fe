// import { useEffect } from "react";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import Podcast from "./Podcast";

const BACKEND_SEARCH = "http://127.0.0.1:8080/api/full-text-search/";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [response, setResponse] = useState("");
  const [loading, isLoading] = useState(null);

  async function searchCall() {
    // eslint-disable-next-line no-console
    console.log(searchValue);
    // eslint-disable-next-line no-console
    console.log(loading);
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(searchValue),
    };
    try {
      isLoading(true);
      // eslint-disable-next-line no-console
      console.log(loading);
      const response = await fetch(BACKEND_SEARCH + searchValue, settings);
      const json = await response.json();
      if (response.status !== 200) throw Error(json.message);
      setResponse(json);
      return json;
    } catch (error) {
      alert(error);
      isLoading(false);
    }
  }

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    searchCall(e.target.value);
    resetInputField();
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  };

  return (
    <div className="search-form-container">
      <Form inline onSubmit={callSearchFunction}>
        <FormControl
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          className="mr-sm-2"
          placeholder="SEARCH"
        />
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;
