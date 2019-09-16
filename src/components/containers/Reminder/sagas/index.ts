import { fork } from 'redux-saga/effects';
import addRemidnerSaga from './addRemidnerSaga';

function* reminderSaga() {
	yield fork(addRemidnerSaga);
}

export default reminderSaga;
