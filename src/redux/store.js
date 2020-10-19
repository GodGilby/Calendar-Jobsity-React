import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';


//Reducers
import CalendarReducer from './reducers/calendarReducer';
import ReminderReducer from './reducers/reminderReducer';

const rootReducer = combineReducers({
    Calendar: CalendarReducer,
    Reminder: ReminderReducer
})



export const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;