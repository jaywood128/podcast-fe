// import { useEffect } from "react";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// const BACKEND_SEARCH = "http://127.0.0.1:8080/api/full-text-search/";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, isLoading] = useState(null);
  const MOVIE_SEARCH = `http://www.omdbapi.com/?t=${searchValue}&apikey=da7a21e1`;

  async function searchCall() {
    console.log(searchValue);
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
      const response = await fetch(MOVIE_SEARCH, settings);
      const json = await response.json();
      if (response.status !== 200) throw Error(json.message);
      setResult(json);
      console.log(typeof json);
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
    console.log(e.target.value);
  };

  return (
    <div>
      <Form inline onSubmit={callSearchFunction}>
        <FormControl
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          className="mr-sm-2"
          placeholder="SEARCH"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
      <ul>
        <div>
          <div>{result.title}</div>
          <h2>{result.Year}</h2>
          <img src={result.Poster}></img>
          <h2>{result.Plot}</h2>
        </div>
      </ul>
    </div>
  );
};

export default SearchBar;