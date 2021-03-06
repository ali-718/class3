import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducer/index';

const initialState = {};
const middleware = [thunk];

const store = createStore(
    Reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;