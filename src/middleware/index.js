import { ACTIONS } from '../redux/constants/action-types';

const forbiddenWords = ["hot", "july"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
    return ((next) => {
        return ((action) => {
            if(action.type === ACTIONS.ADD_ARTICLE){
                const foundWord = forbiddenWords.filter(
                    word => action.payload.title.includes(word.toLowerCase())
                );

                if(foundWord.length)
                    return dispatch({type: ACTIONS.FOUND_BAD_WORD});
            }
            return next(action)
        })
    })
};