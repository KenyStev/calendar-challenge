import { take, put, call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { addNewReminderRequest, addNewReminder } from '../actions/reminderActions';
import addReminderSaga, { validateReminder } from '../sagas/addReminderSaga';
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

const gen = cloneableGenerator(addReminderSaga)();

describe('addReminderSaga saga', () => {
  it('should take a request action', () => {
    const nextEffect = gen.next().value;
    
    expect(nextEffect).toEqual(
      take(addNewReminderRequest.getType())
    );
  });

  it('should call a validate Reminder function', () => {
    const nextEffect = gen.next(mockRequestObj).value;
    
    expect(nextEffect).toEqual(
      call(validateReminder, {})
    );
  });

  it('should put a new Reminder in the redux', () => {
    const nextEffect = gen.next(mockRequestObj).value;
    
    expect(nextEffect).toEqual(
      put(addNewReminder({}))
    );
  });
});

export {};
