import { ACTIONS } from '../constants/action-types';

export const addArticle = payload => ({
    type: ACTIONS.ADD_ARTICLE,
    payload
}); 

export const getData = () => (
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
        respone => respone.json()
    )
    .then(
        dataInJson => ({ type: ACTIONS.LOAD_DATA, payload: dataInJson })
    )
    .catch(
        err => console.log(err)
    )
); 