import { createAction } from "redux-act";

export const addNewReminderRequest = createAction<object>('ADD_NEW_REMINDER_REQUEST');
export const addNewReminder = createAction<object>('ADD_NEW_REMINDER');
