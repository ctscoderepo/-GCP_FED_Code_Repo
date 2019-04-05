import React from "react";
import { connect } from "react-redux";
import SearchOutputComponent from "../../components/SearchOutput";

function SearchOutput({ airesults, isLoading }) {
  return <SearchOutputComponent airesults={airesults} isLoading={isLoading} />;
}

export default connect(({ search }) => ({
  airesults: search.products,
  isLoading: search.isLoading
}))(SearchOutput);

   