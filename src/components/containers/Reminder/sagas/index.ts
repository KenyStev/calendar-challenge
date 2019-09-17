import { fork } from 'redux-saga/effects';
import addReminderSaga from './addReminderSaga';
import editReminderSaga from './editReminderSaga';

function* reminderSaga() {
	yield fork(addReminderSaga);
	yield fork(editReminderSaga);
}

export default reminderSaga;
