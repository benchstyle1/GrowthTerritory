<template>
  <div class="search-form">
    <h4>Search User</h4>
    <span>Enter user name</span>
    <Search :area="getUsers" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Search from "@/components/Search.vue";

export default {
  name: "SearchUser",
  components: {
    Search,
  },
  computed: {
    ...mapGetters(["getUsers"])
  },
  methods: {

  },
};
</script>

<style></style>
