import { ACTIONS } from '../constants/action-types';

const initialState = {
    articles: [{ title: "The Matrix", id: 0 }],
    remoteArticles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_ARTICLE:
            return {
                ...state,
                articles: state.articles.concat(action.payload)
            };
        case ACTIONS.FOUND_BAD_WORD:
            return {
                ...state,
                articles: state.articles.concat({ title: "**illeagal words**", id: null })
            }
        case ACTIONS.LOAD_DATA:
            return {
                ...state,
                remoteArticles: state.remoteArticles.concat(action.payload)
            }
        default:
    }
    return state;
};

export default rootReducer;