import React from "react";
import SearchComponent from "../../components/Search";
import { connect } from "react-redux";

function Search({ searchResults }) {
  return <SearchComponent searchResults={searchResults} />;
}

export default connect(({ search }) => ({ searchResults: search.products }))(
  Search
);
