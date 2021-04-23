<template>
  <div class="search__result">
    <h4>{{info.username}}, id - {{info.id}}</h4>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    info: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style></style>
