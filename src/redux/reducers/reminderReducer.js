import { ReminderActionType } from "../types";

const initialState = {
    reminders: [],
    weather: null
}

const reminderReducer = (state = initialState, action) => {
  console.log(action.payload,state.reminders);
  switch (action.type) {
    case ReminderActionType.SET_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case ReminderActionType.GET_REMINDER:
      return {
        ...state
      };
    case ReminderActionType.SET_WEATHER:
      return {
          reminders: [...state.reminders],
          weather: action.payload
      }
    case ReminderActionType.UPDATE_REMINDER:

        let specificReminder = state.reminders.filter((reminder) => reminder.id !== action.payload.id)
        console.log(specificReminder);
        return {
          ...state,
          reminders: [...specificReminder,action.payload]
        }
    default:
      return state;
  }
};

export default reminderReducer;
