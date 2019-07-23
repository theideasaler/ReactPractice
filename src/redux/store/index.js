import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../../middleware/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../../saga/api-saga';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialSagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(
            forbiddenWordsMiddleware,
            initialSagaMiddleware
        )
    )
);

initialSagaMiddleware.run(apiSaga);

export default store;