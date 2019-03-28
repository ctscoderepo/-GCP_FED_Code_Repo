export default (state=[],action)=>{
    switch(action.type){
        case "AIRESULTS": return action.payload
        default: return state;
    }
}