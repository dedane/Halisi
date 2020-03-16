<template>
  <v-content>
     <!-- <div id="login">
          </div> -->
          <Header></Header>
<section id="firebaseui-auth-container"></section>
<!-- <v-layout justify-center style="margin-top:10%">

  <v-flex xs12 sm8 md4>

    <v-card class="elevation-6" color="info">

     <v-layout column justify-center align-center>
          <v-card-title class="font-weight-medium display-1 mt-10">
            Login Form
          </v-card-title>

          <span class="mb-3 mt-2">
            Fill in your details to Sign in.
            </span>

          <v-form class="mt-4 mb-10" style="width:350px" ref="login-form" id="login" l>

            <v-text-field
              append-icon="mdi-account-circle"
              name="login"
              label="Login"
              v-model="email"
              id="login"
              type="text"
              outlined
              rounded
              color="green"
            ></v-text-field>

            <v-text-field
              filled
              append-icon="mdi-lock"
              name="password"
              label="Password"
              id="password"
              v-model="password"
              type="password"
              outlined
              rounded
              color="green"
            ></v-text-field>
 
            <v-layout justify-center>
              <p class="body-2">
                Don't have a account? <router-link class="green--text text--darken-2" style="text-decoration:none;" to="/Registration">Sign up </router-link>
              </p>

            </v-layout>
             <v-btn rounded large block class="mb-3" dark color="success"  @click="validate" id="Post">Login</v-btn>
          </v-form>
        </v-layout>
      </v-card>
    </v-flex>
</v-layout> -->

      
  </v-content>
</template>

<script>
import "firebaseui/dist/firebaseui.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';
import Header from "@/components/Header"


export default {
    name: 'login',
    components: {
      Header
    }, 
     mounted() {
      let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
      }
      var uiConfig = {
        signInSuccessUrl: "Profile",
        signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID]
      };
      ui.start("#firebaseui-auth-container",uiConfig);
    },
    data: () => ({
        email: '',
        password: ''
    }),

   
}
</script>

<style lang="scss" scoped>
.internal-autofill-selected {
    background-color: rgba(255,255,255) !important;
}
#login {
  /* display: flex;
    justify-content: center;
    align-items: center; */
    width: auto;
    height: auto;
 /*   background-color: #2c5b86;
   background-size: cover; */
}

</style>