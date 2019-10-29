import { 
    GET_WEATHER, 
    GET_WEATHER_ERR
 } from '../actions/weatherAction';

    var initState = {
        data: {},
        loader: new Date(),
        getWeatherStatus: 'not done'
    }

export default function weatherReducer(state = initState, action) {
    switch (action.type) {
        case GET_WEATHER:
        {
            return {
                ...state,
                loader: new Date(),
                data: action.payload,
                getWeatherStatus: 'done',
            }
        }

        case GET_WEATHER_ERR:
        {
            return {
                ...state,
                loader: new Date(),
                getWeatherStatus: 'error',
            }
        }
    
        default:
            return state;
    }
}