import { fork } from 'redux-saga/effects';
import addReminderSaga from './addReminderSaga';

function* reminderSaga() {
	yield fork(addReminderSaga);
}

export default reminderSaga;
