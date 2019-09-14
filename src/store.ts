import rootReducer from './reducer';
import {
	 createStore,
	 compose
} from 'redux';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
