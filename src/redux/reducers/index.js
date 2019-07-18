import { ACTIONS } from '../constants/action-types';

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.ADD_ARTICLE:
            return {
                ...state,
                articles: state.articles.concat(action.payload)
            };
        default:
    }
    return state;

};

export default rootReducer;