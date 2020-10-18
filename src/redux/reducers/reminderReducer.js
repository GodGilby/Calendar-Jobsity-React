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

        let fReminded = state.reminders.filter((reminder) => reminder.id !== action.payload.id)
        
        return {
          ...state,
          reminders: [...fReminded,action.payload]
        }
    case ReminderActionType.DELETE_REMINDER:

        let findReminder = state.reminders.filter((reminder) => reminder.id !== action.payload)

        return{
           ...state,
           reminders: findReminder
        }
    case ReminderActionType.DELETE_ALL_REMINDERS:

        let getPackOfReminders = state.reminders.filter((reminder)=> reminder.date.substring(8, reminder.date.length) != action.payload.day)
        
        return{
            ...state,
            reminders: getPackOfReminders
        }
    default:
      return state;
  }
};

export default reminderReducer;
