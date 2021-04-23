<template>
  <div class="sort">
    <a href="#" v-show="isSort" @click="toggle" >
      <i class="fas fa-sort-amount-up-alt"></i>
    </a>
    <a href="#" v-show="!isSort" @click="toggle" >
      <i class="fas fa-sort-amount-down-alt"></i></a>
  </div>
</template>

<script>
export default {
  name: "Sort",
  data() {
    return {
      isSort: true,
    };
  },
  methods: {
    toggle() {
      this.isSort = !this.isSort;
      this.$emit("sort", this.isSort);
    },
  },
};
</script>

<style></style>
