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

describe('editReminderSaga saga', () => {
  it('Message should be less or equal than 30', () => {
    const result = validateReminder({
    	...mockRequestObj,
    	text: 'Message should be less or equal than 30'
    });
    
    expect(result).toEqual({
			invalid: true,
			error: 'text must be less or equal to 30'
		});
  });

  it('Should contain hour', () => {
    const result = validateReminder({
    	...mockRequestObj,
    	hour: undefined
    });
    
    expect(result).toEqual({
			invalid: true,
			error: 'hour needed'
		});
  });

  it('Should contain minute', () => {
    const result = validateReminder({
    	...mockRequestObj,
    	minute: undefined
    });
    
    expect(result).toEqual({
			invalid: true,
			error: 'minute needed'
		});
	});

	it('Should contain city', () => {
    const result = validateReminder({
    	...mockRequestObj,
    	city: undefined
    });
    
    expect(result).toEqual({
			invalid: true,
			error: 'city needed'
		});
	});

	it('Should get rid of errors', () => {
    const result = validateReminder({
    	...mockRequestObj,
    	errors: {}
    });
    
    expect(result).toEqual(mockRequestObj);
	});
});

export {};
