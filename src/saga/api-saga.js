import { takeEvery, call, put } from "redux-saga/effects";
import { ACTIONS } from '../redux/constants/action-types'; 

function *watcherSaga() {
    yield takeEvery(ACTIONS.REQUEST_DATA, workerSaga);
}

function *workerSaga(){
    try {
        const payload = yield call(getDataInSaga)
        yield put({type: ACTIONS.LOAD_DATA, payload})
    }catch(e){
        yield put({type: ACTIONS.API_ERROR, payload:e})
    }
}

const getDataInSaga = () => (
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(
        respone => respone.json()
    )
    .catch(
        err => console.log(err)
    )
);
export default watcherSaga;

