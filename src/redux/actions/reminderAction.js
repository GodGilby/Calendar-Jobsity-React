import {ReminderActionType} from '../types';
import axios from 'axios';
import {API_KEY_WEATHER} from '../../data/key';

export const setReminder = (data) => ({
    type: ReminderActionType.SET_REMINDER,
    payload: data
})

export const getReminder = () => ({
    type: ReminderActionType.GET_REMINDER
})

export const setWeather = (cityName) => (dispatch) =>{
    console.log("Entrando a la accion",cityName);

    try{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_WEATHER}`).then((response)=>{
            if(response.status == 200 && response.data){
                console.log(response.data);
                dispatch({
                    type: ReminderActionType.SET_WEATHER,
                    payload: {
                        status: response.data.weather[0].main,
                        humidity: response.data.main.humidity,
                        temperature: response.data.main.temp,
                        feels_like: response.data.main.feels_like
                    }
                })
            }else{
                console.log("Error Getting Weather..")
            }
        })
    }catch(e){
        console.log(e);
    }
};

export const setModal = () => ({
    type: ReminderActionType.SET_MODAL
})

export const updateReminder = (data) => ({
    type: ReminderActionType.UPDATE_REMINDER,
    payload: data
})