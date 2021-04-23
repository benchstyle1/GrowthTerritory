import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      token: "",
    },
    users: [],
  },
  mutations: {
    setAuthToken(state, payload) {
      state.auth.token = payload;
      this.dispatch("fetchData");
    },
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async fetchToken(state, payload) {
      await Axios.post(
        "https://agile-garden-50413.herokuapp.com/api/token/login/",
        {
          username: payload.username,
          password: payload.password,
        }
      )
        .then((response) => {
          this.commit("setAuthToken", response.data.auth_token);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async fetchData() {
      await Axios.get("https://agile-garden-50413.herokuapp.com/api/users/", {
        headers: {
          "content-type": "application/json",
          Authorization: `token ${this.state.auth.token}`,
        },
      }).then((response) => {
        this.commit("setUsers", response.data);
        console.log(this.state.users);
      });
    },
    async Logout() {
      await Axios.post(
        "https://agile-garden-50413.herokuapp.com/api/token/logout/"
      );
    },
  },
  modules: {},
  getters: {
    getUsers: state => {
      return state.users;
    },
    getToken: state => {
      return state.auth.token;
    }
  },
});
