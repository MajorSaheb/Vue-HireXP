<template>
  <div class="loginLayout">
    <md-card>
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content>
        This login is just used to maintain the session.
        <md-field :class="nameValidation" md-clearable>
          <label>Name</label>
          <md-input v-model="name" required></md-input>
          <span class="md-error">Field is Mandatory</span>
        </md-field>
        <md-field :class="passwordValidation">
          <label>Password</label>
          <md-input v-model="password" type="password" required></md-input>
          <span class="md-error">Field is Mandatory</span>
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button v-on:click="login">Login</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import Vue from "vue";
import { MdCard, MdButton, MdField } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdField);

export default {
  name: "Login",
  props: {
    user: String
  },
  data: () => ({
    name: null,
    password: null,
    nameHasError: false,
    passwordHasError: false,
  }),
  computed: {
    nameValidation() {
      return {
        "md-invalid": this.nameHasError
      };
    },
    passwordValidation() {
      return {
        "md-invalid": this.passwordHasError
      };
    }
  },
  created() {
    let session = sessionStorage.getItem('hireXP');
    if (session === "true"){
      this.$router.push('/home');
    }
    else null
  },
  methods: {
    login: function (event) {
      this.nameHasError = this.passwordHasError = false;
      if (this.name === null || this.name === ""){
        this.nameHasError = true;
      }
      if(this.password === null || this.password === "") {
        this.passwordHasError = true;
      }
      else {
        sessionStorage.setItem('hireXP', 'true');
        sessionStorage.setItem('name', this.name);
        this.$router.push('/home');
      }
    }
  }
};
</script>

<style>
.loginLayout {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(#3a3232fc, #000000e0);
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
