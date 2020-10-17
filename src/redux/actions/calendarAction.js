import {CalendarActionType} from '../types';

export const getDays = () =>({
    type: CalendarActionType.SET_DAYS
})

export const setDays = (data) => ({
    type: CalendarActionType.ADD_DAYS,
    payload: data
})