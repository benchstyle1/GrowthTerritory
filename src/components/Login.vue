<template>
  <div class="login">
    <h4>Sign In</h4>
    <span>Username</span>
    <input type="text" v-model="$v.username.$model" />
    <div class="error" v-if="!$v.username.required && isShowErrors">
      <span>Username is required</span>
    </div>
    <div class="error" v-if="$v.username.maxLength && isShowErrors">
      <span>Username length must be max 150 symbols</span>
    </div>
    <span>Password</span>
    <input type="password" v-model="$v.password.$model" />
    <div class="error" v-if="!$v.password.required && isShowErrors">
      <span>Password is required</span>
    </div>
    <div class="error" v-if="!$v.password.minlength && isShowErrors">
      <span>Password length must be min 1 symbols</span>
    </div>
    <div class="error" v-if="$v.password.maxLength && isShowErrors">
      <span>Password length must be max 20 symbols</span>
    </div>
    <button @click="onSubmit">Login</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { required, maxLength, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      isShowErrors: false,
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
    isValid() {
      let userValidation =
        this.$v.username.required &&
        this.$v.username.minlength &&
        this.$v.username.maxlength;
      let passwordValidation =
        this.$v.password.required &&
        this.$v.password.minlength &&
        this.$v.password.maxlength;

      if (userValidation && passwordValidation) {
        return true;
      } else {
        return false;
      }
    },
  },
  validations: {
    username: {
      required,
      minlength: minLength(1),
      maxlength: maxLength(150),
    },
    password: {
      required,
      minlength: minLength(1),
      maxlength: maxLength(20),
    },
  },
  methods: {
    ...mapActions(["fetchToken"]),
    async onSubmit(event) {
      if (!this.isValid) {
        event.preventDefault();
        this.isShowErrors = true;
      } else {
        await this.fetchToken({ username: this.username, password: this.password });
        if (this.getToken !== "") {
            this.$router.push("/Search");
        }        
      }
    },
  },
};
</script>

<style></style>
