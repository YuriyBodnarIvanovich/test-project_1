const DATA_OF_TRACK = 'DATA_OF_TRACK';
const SEARCH_TRACK = 'SEARCH_TRACK';

let initialState = {
    dataOfTrack:[],
    searchWord:''
}


const SearchReducer = (state = initialState,action) =>{
    switch (action.type){
        case DATA_OF_TRACK:{
            return{
                ...state,
                dataOfTrack: action.data
            }
        }
        case SEARCH_TRACK:{
            return {
                ...state,
                searchWord: action.word
            }
        }
    }
    return state
}


export default SearchReducer;
