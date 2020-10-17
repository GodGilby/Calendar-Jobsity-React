import { CalendarActionType } from "../types";

const initialState = {
    days: [],
}

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CalendarActionType.SET_DAYS:
      return {
        ...state,
      };
    case CalendarActionType.ADD_DAYS:
      return {
        ...state,
        days: action.payload
      }
    default:
      return state;
  }
};

export default calendarReducer;
