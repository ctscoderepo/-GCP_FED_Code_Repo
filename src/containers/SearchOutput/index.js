import React from 'react';
import {connect} from 'react-redux';
import SearchOutputComponent from '../../components/SearchOutput';

function SearchOutput({airesults}){
    return(
        <SearchOutputComponent data={airesults} />
    ) 
}

export default connect(({airesults})=> ({airesults}))(SearchOutput)