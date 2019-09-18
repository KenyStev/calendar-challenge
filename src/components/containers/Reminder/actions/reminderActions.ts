import { createAction } from "redux-act";

export const addNewReminderRequest = createAction<object>('ADD_NEW_REMINDER_REQUEST');
export const addNewReminder = createAction<object>('ADD_NEW_REMINDER');

export const editReminderRequest = createAction<object>('EDIT_REMINDER_REQUEST');
export const editReminder = createAction<object>('EDIT_REMINDER');

export const deleteReminder = createAction<object>('DELETE_REMINDER');
export const deleteAllReminder = createAction<string>('DELETE_ALL_REMINDER');
