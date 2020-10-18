import {ReminderActionType} from '../types';

export const setReminder = (data) => ({
    type: ReminderActionType.SET_REMINDER,
    payload: data
})

export const getReminder = () => ({
    type: ReminderActionType.GET_REMINDER
})

export const setWeather = () => ({
    type: ReminderActionType.SET_REMINDER
})