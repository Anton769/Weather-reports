<template>
  <header class="header">
    <nav class="header__nav">
      <div class="container">
        <a href="" class="header__nav-logo">
          <img src="@/assets/img/logo.svg" alt="" />
          <span>vue weather</span>
        </a>
        <div class="header__search">
          <img @click="darkMode" src="@/assets/img/drop.svg" alt="" />
          <input
            type="text"
            class="header__search-input"
            placeholder="Выбрать город"
            v-model="city"
            @keydown.enter="getWeather(city)"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      city: "",
      location: null,
    };
  },
  methods: {
    ...mapActions(["getWeather"]),
    // getLoc() {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.location = {
    //       lat: position.coords.latitude,
    //       lon: position.coords.longitude,
    //     };
    //   });
    // },
    darkMode() {
      const val = document.body.style.getPropertyValue("--bg");
      if (val == "white") {
        document.body.style.setProperty("--bg", "rgb(40 43 63)");
        document.body.style.setProperty("--text", "white");
      } else {
        document.body.style.setProperty("--bg", "white");
        document.body.style.setProperty("--text", "black");
      }
    },
  },
 async mounted() {
    // this.getLoc();
    // setTimeout(() => {
    //     this.getLocUser(this.location);
    // }, 1000);
    this.getWeather("Ташкент");
  },
  created() {
    document.body.style.setProperty("--bg", "white");
    document.body.style.setProperty("--text", "black");
  },
};
</script>

<style lang="scss" scoped>
</style>