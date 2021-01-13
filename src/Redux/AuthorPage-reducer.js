const MAIN_AUTHOR = 'MAIN_AUTHOR';
const AUTHOR_DATA = 'AUTHOR_DATA';
let initialState = {
    author:'The Jackson 5',
    dataAuthor:[]
}


const AuthorReducer = (state = initialState,action) =>{
    switch (action.type){
        case MAIN_AUTHOR:{
            return{
                ...state,
                author:action.name
            }
        }
        case AUTHOR_DATA:{
            return {
                ...state,
                dataAuthor: action.array
            }
        }

    }
    return state
}

export default AuthorReducer;
