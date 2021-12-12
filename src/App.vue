<template>
  <div id="app">
    <HeaderVue />
    <Section1 />
  </div>
</template>

<script>
import HeaderVue from "./components/HeaderVue.vue";
import Section1 from "./components/Section1.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    Section1,
  },
};
</script>

<style>
</style>
