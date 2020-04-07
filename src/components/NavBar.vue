<template>
                        <v-toolbar
                      color="#3F6990"
                      dark="">
                      <v-img src="https://ik.imagekit.io/ugyodiq15/Halisi_pQwDn_AxS.png" max-width="100" max-height="100" @click="$router.push('/')"/>                    
                        <v-spacer/>

                        <v-btn class="text-center mx-4" @click="$router.push('Product')" text>
                            Products
                        </v-btn>
                        <v-btn class="text-center mx-4" @click="$router.push('Company')" text>
                            Companies
                        </v-btn>
                        <v-btn class="text-center mx-8" text>
                            About Us
                        </v-btn>

                      <v-btn class="text-center mx-2 " rounded outlined color="#6FCF97" @click="$router.push('Login')" v-show="!user">  
                          Login
                      </v-btn>

                      <v-btn class="text-center mx-2" rounded color="#6FCF97" @click="$router.push('SignUp')" v-show="!user">  
                          Register    
                      </v-btn>

                      <v-btn class="text-center mx-2" rounded color="#6FCF97" @click="signOut" v-show="user"> Logout </v-btn>

                      <v-avatar v-if="user">
                          <v-img :src="user.photoURL" v-show="user"></v-img>
                      </v-avatar>
                   </v-toolbar>
</template>

<script>
import "firebaseui/dist/firebaseui.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from 'firebaseui';

export default {
data() {
    return {
        user: null
    };
},
created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
    },
methods: {
      signOut(e) {
        e.stopPropagation();
        firebase.auth().signOut();
        this.$router.push({
          name: "/"
        });
      }
    }
}
</script>

<style>

</style>