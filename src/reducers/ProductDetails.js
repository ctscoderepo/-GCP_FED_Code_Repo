export default (state={product:{}}, action)=>{
    switch(action.type){
        case "PRODUCTDETAILS": return {...state, product:action.payload}
        default:return state;
    }
} 