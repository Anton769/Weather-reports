<template>
  <section class="week" v-if="weather">
    <div class="container">
      <Day 
      v-for="(day, i) 
      in weather.daily" 
      :key="i"
      :day="day"
      />
      {{ delDay() }}
    </div>
  </section>
</template>

<script>
import Day from "@/components/Day.vue";
import { mapState } from "vuex";

export default {
  components: {
    Day,
  },
  computed: {
    ...mapState(["weather"]),
  },
  methods: {
    delDay(){
      this.weather.daily.splice(7, 1)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>