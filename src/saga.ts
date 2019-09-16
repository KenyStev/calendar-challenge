import { fork } from 'redux-saga/effects';
import reminderSaga from './components/containers/Reminder/sagas';

function* mainSaga() {
	yield fork(reminderSaga);
}

export default mainSaga;
