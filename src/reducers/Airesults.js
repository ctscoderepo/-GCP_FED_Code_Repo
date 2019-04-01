export default (state=[],action)=>{
    switch(action.type){
        case "SEARCHRESULTSAI": return action.payload
        default: return state;
    }
}
