const GET_TOP_TRACK = 'GET_TOP_TRACK';

let initialState = {
    topTrack: [],
}


const MainReducer = (state = initialState,action) =>{
    switch (action.type){
        case GET_TOP_TRACK:{
            return {
                ...state,
                topTrack:action.array
            }
        }
    }
    return state;
}

export default MainReducer;
