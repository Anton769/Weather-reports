<template>
  <div class="week__day">
    <h2 class="week__day-title">{{ getWeekDay }}</h2>
    <p class="week__day-date">{{ getDay }} {{ getMonth }}</p>
    <img :src="getIcon" alt="" />
    <p class="week__day-temp">{{ Math.round(day.temp.day) }}°</p>
    <p class="week__day-feelsLike">{{ Math.round(day.feels_like.night) }}°</p>
    <p class="week__day-descr">{{ day.weather[0].description }}</p>
  </div>
</template>

<script>
import {unix} from '@/time'

export default {
  props: ["day"],
  
  computed: {
    getDay(){
        return unix(this.day.dt, "day")
    },
    getMonth(){
        return unix(this.day.dt, "month")
    },
    getWeekDay(){
        return unix(this.day.dt, "weekday")
    },
    getIcon() {
      return `https://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>