<template>

    <!-- <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
    <div class="card-image" style="margin-top:25px;margin-left:10px;"> 
        <img :src="user.photoURL" style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> </div>
    <div class="card-stacked">
        <div class="card-content">
         <p> name: <strong>{{user.displayName}}</strong><br />email:<strong>{{user.email}}</strong><br/>uid:
                <strong>{{user.uid}}</strong> <br />provider: <strong
                    class="teal-text">{{user.providerData[0].providerId}}</strong> </p>
        </div>
    </div>
</div -->
<v-card max-width="400" class="mx-auto" v-if="user">
    <v-list-item>
        <v-list-item-avatar>
            <v-img :src="user.photoURL"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title> {{user.displayName}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{user.uid}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{user.providerData[0].providerId}}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</v-card>

    
  
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
        }
    },

    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user;
            }
        });
    }
}
</script>

<style>

</style>