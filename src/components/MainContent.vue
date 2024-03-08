<template>
  <section class="content" v-if="weather">
    <div class="container">
      <div class="content__left">
        <p class="content__left-temp">
          {{ Math.round(weather.current.temp) }}°
        </p>
        <p class="content__left-day">Сегодня</p>
        <p class="content__left-time">Время: {{ getTime }}</p>
        <p class="content__left-city">Город: {{ weather.name }}</p>
        <img class="content__left-img" :src="getIcon" alt="" />
      </div>
      <div class="content__right">
        <div class="content__right-item">
          <div class="content__right-item-img">
            <img src="@/assets/img/temp.svg" alt="" />
          </div>
          <p class="content__right-item-descr">
            Температура
            <span
              >{{ Math.round(weather.current.temp) }}° - ощущается как
              {{ Math.round(weather.current.feels_like) }}°</span
            >
          </p>
        </div>
        <div class="content__right-item">
          <div class="content__right-item-img">
            <img src="@/assets/img/press.svg" alt="" />
          </div>
          <p class="content__right-item-descr">
            Давление <span>{{ getPress }} мм ртутного столба - нормальное</span>
          </p>
        </div>
        <div class="content__right-item">
          <div class="content__right-item-img">
            <img src="@/assets/img/osadki.svg" alt="" />
          </div>
          <p class="content__right-item-descr">
            Осадки
            <span>Вероятность осадков {{ weather.current.humidity }}%</span>
          </p>
        </div>
        <div class="content__right-item">
          <div class="content__right-item-img">
            <img src="@/assets/img/wind.svg" alt="" />
          </div>
          <p class="content__right-item-descr">
            Ветер
            <span
              >{{ Math.round(weather.current.wind_speed) }} м/с юго-запад -
              легкий ветер</span
            >
          </p>
        </div>
        <img
          class="content__right-item-bg"
          src="@/assets/img/mainBg.svg"
          alt=""
        />
      </div>
    </div>
  </section>

  <div class="loader" v-else>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["weather"]),
    getTime() {
      return new Date().toLocaleString("ru-RU", {
        timeZone: this.weather.current.timezone,
        timeStyle: "short",
      });
    },
    getIcon() {
      return `https://openweathermap.org/img/wn/${this.weather.current.weather[0].icon}@2x.png`;
    },
    getPress() {
      let mmHg = this.weather.current.pressure * 0.750062;
      return Math.round(mmHg);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>