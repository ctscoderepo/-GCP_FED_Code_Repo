import React from 'react';
import {connect} from 'react-redux';
import SearchOutputComponent from '../../components/SearchOutput';

function SearchOutput({airesults}){
    return(
        <SearchOutputComponent airesults={airesults} />
    ) 
}

export default connect(({airesults})=> ({airesults}))(SearchOutput)
