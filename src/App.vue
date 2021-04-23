<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import "normalize.css";
import MainLayout from "@/layouts/MainLayout.vue"

export default {
  components: {
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "Main") + "Layout";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

html {
  font-family: Inter;
}

body input {
  border: none;
  outline: none;
}
</style>
