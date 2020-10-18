import { ReminderActionType } from "../types";

const initialState = {
    reminders: [],
}

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReminderActionType.SET_REMINDER:
      return {
        ...state,
        reminders: [...state.reminders, action.payload],
      };
    case ReminderActionType.GET_REMINDER:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default reminderReducer;
