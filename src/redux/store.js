import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';

//Reducers
import CalendarReducer from './reducers/calendarReducer';
import ReminderReducer from './reducers/reminderReducer';

const rootReducer = combineReducers({
    Calendar: CalendarReducer,
    Reminder: ReminderReducer
})

const middlewares = [logger];


export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;