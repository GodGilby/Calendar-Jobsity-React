import {createStore,applyMiddleware,combineReducers} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';

//Reducers
import CalendarReducer from './reducers/calendarReducer';
import ReminderReducer from './reducers/reminderReducer';

const rootReducer = combineReducers({
    Calendar: CalendarReducer,
    Reminder: ReminderReducer
})

export const store = createStore(rootReducer);

export default store;