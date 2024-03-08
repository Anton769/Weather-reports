import axios from 'axios';
import { createStore } from 'vuex'


const store = createStore({
    state: {
        apiKey: 'adc985dd90316abb965b500fd1ab03b1',
        weather: null
    },
    mutations: {
        getWeather(state, payload){
            state.weather = payload
        }
    },
    actions: {
        async getWeather({commit, state}, city){
            try {
                const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
                const {lat, lon, name } = res.data[0]
                const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${state.apiKey}&units=metric&lang=ru`)
                const res3 = {...res2.data, name}
                commit('getWeather', res3)
            } catch (error) {
                console.log('Произошла ошибка при получении погоды');
            }
        },
    },
    getters: {}
})
export default store