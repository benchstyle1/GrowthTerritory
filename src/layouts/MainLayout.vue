<template>
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MainLayout",
  async beforeDestroy() {
    await this.Logout();
  },
  methods: {
    ...mapActions(["Logout"]),
  },
};
</script>

<style>
.main-layout {
  width: 500px;
  height: 500px;
  margin: 150px auto 0 auto;
  background-color: #faf3f3;
  padding: 0.1px 0;
  border-radius: 50px;
}

.main-layout a {
  text-decoration: none;
  color: black;
}

.login,
.search-form {
  width: 300px;
  height: 400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
}

.login h4,
.search-form h4 {
  margin: 20px auto;
  text-align: center;
}

.login span,
.search-form span {
  margin: 0 0 5px 20px;
}

.login input,
.search-form input {
  height: 40px;
  border-radius: 20px;
  padding: 0 0 0 20px;
  width: 380px;
  margin: 0 0 20px 0;
}

.search {
  padding: 0.1px 0;
}

.search__bar {
  display: flex;
  padding: 0.1px 0;
}

.search__result {
  background-color: white;
  height: 40px;
  width: 200px;
  margin: 20px auto 0 auto;
  border-radius: 20px;
}

.search__result h4 {
  padding: 12px 0 0 0;
  font-size: 14px;
}

.sort {
  height: 40px;
  margin: 12px 0 0 -36px;
}

.login button {
  padding: 0;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  margin: 0 auto;
  background-color: #1e1a3e;
  color: white;
  margin: 20px auto 50px auto;
  border: none;
}

.login button:focus {
  outline: none;
}

.error {
  color: #ff6683;
}

.error span {
  margin: -15px 0 5px 20px;
  font-size: 10px;
  display: block;
}

.adaptive {
  overflow-y: scroll;
  overflow-x: hidden;
}

@media screen and (max-width: 500px) {
  .main-layout {
    width: 300px;
    border-radius: 25px;
  }

  .login {
    width: 300px;
  }

  .login input,
  .search-form input {
    width: 240px;
    margin: 0 0 20px 20px;
  }

  .login span,
  .search-form span {
    margin: 0 0 5px 40px;
  }
}
</style>
