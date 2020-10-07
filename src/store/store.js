import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';
import reducer from './reducers/index';

const allEnhancers = composeWithDevTools(applyMiddleware(thunk))

const store = createStore (reducer, allEnhancers);
export default store;