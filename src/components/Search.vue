<template>
  <div class="search">
    <div class="search__bar">
      <input type="text" v-model="model" />
      <Sort @sort="onSort" />
    </div>
    <div
      class="search__results"
      :class="{ adaptive: isScroll }"
      :style="{ height: height + 'px' }"
    >
      <SearchResult v-for="user in filteredUsers" :key="user.id" :info="user" />
    </div>
  </div>
</template>

<script>
import SearchResult from "@/components/SearchResult.vue";
import Sort from "@/components/Sort.vue";

export default {
  name: "Search",
  components: {
    SearchResult,
    Sort,
  },
  props: {
    area: {
      type: Array,
      default: [],
    },
    listLength: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      model: "",
      height: 60 * this.listLength,
      isSort: true,
    };
  },
  computed: {
    filteredUsers() {
      if (this.model.length > 0) {
        let users = this.area.filter(
          (item) => item.username.substring(0, this.model.length) === this.model
        );
        if (this.isSort) {
          return users.sort((a, b) => {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
          });
        } else {
          return users.sort((a, b) => {
            if (a.id < b.id) return 1;
            if (a.id > b.id) return -1;
          });
        }
      } else {
        return [];
      }
    },
    isScroll() {
      if (this.filteredUsers.length > this.listLength) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    onSort(event) {
      this.isSort = event;
    },
  },
};
</script>

<style></style>
