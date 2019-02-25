import * as constants from './actionTypes'
const defaultStore ={
    focused:false
}

export default (state=defaultStore,action)=>{
    if(action.type===constants.SEARCH_FOCUS){
        const newState =JSON.parse(JSON.stringify(state))
        newState.focused =true;
        return newState
    }
    if(action.type===constants.SEARCH_BLUR){
        const newState =JSON.parse(JSON.stringify(state))
        newState.focused =false;
        return newState
    }
    return state;
}