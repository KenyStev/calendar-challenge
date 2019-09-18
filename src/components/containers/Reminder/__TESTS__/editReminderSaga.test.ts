import { take, put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { editReminderRequest, editReminder } from '../actions/reminderActions';
import editReminderSaga from '../sagas/editReminderSaga';
import { validateReminder } from '../sagas/reminderUtils';
import moment from 'moment';

// Mock data
const mockRequestObj = {
	text: 'Hello World',
	city: 'SPS',
	hour: 5,
	minute: 35,
	date: moment().format('YYYY-DD-MM'),
	datetime: new Date(),
	color: '#FFFFFF'
};

const gen = cloneableGenerator(editReminderSaga)();

describe('editReminderSaga saga', () => {
  it('should take a request action', () => {
    const nextEffect = gen.next(mockRequestObj).value;
    
    expect(nextEffect).toEqual(
      take(editReminderRequest.getType())
    );
  });

  it('should call a validate Reminder function', () => {
    const nextEffect = gen.next(editReminderRequest(mockRequestObj)).value;
    
    expect(nextEffect).toEqual(
      call(validateReminder, mockRequestObj)
    );
  });

  it('should put a new Reminder in the redux', () => {
    const nextEffect = gen.next(mockRequestObj).value;
    
    expect(nextEffect).toEqual(
      put(editReminder(mockRequestObj))
    );
  });
});

export {};
