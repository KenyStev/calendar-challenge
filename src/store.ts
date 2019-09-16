import rootReducer from './reducer';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mainSaga);

export default store;
