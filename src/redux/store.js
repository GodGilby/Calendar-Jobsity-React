import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


//Reducers
import CalendarReducer from './reducers/calendarReducer';
import ReminderReducer from './reducers/reminderReducer';

const rootReducer = combineReducers({
    Calendar: CalendarReducer,
    Reminder: ReminderReducer
})

const middlewares = [logger];


export const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;