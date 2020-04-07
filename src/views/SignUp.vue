<template>
    <v-content>
      <v-img :src="imgUrl" id="background-image">
        <div id="signUp">
            <v-container class="my-12" align-center justify-center>
                <v-layout row wrap justify-center justify-space-around ma-12>
                    <v-flex xs12 md2>
                        <v-text  class="text-center font-weight-black display-2" >
                             Sign Up 
                        </v-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap justify-center justify-space-around ma-12>
                    <v-flex xs12 md6>
                        <v-text  class="text-center title">
                             Discover A life of Good Food and Healthy Living 
                        </v-text>
                    </v-flex>
                </v-layout>
                <v-layout row wrap justify-center align-center justify-space-around ma-12 pt-18>
                    <v-flex xs12 md5 justify-space-around mb-4>
                        <v-btn  color="#Decc27" block  large ><v-icon left>{{icons.mdiGoogle}}</v-icon>Google</v-btn>
                    </v-flex>
                    <v-flex xs12 md5 justify-space-around mb-4 >
                        <v-btn  color="#2c5b86" block  large><v-icon left>{{icons.mdiFacebook}}</v-icon> Facebook</v-btn>
                    </v-flex>
                   
                </v-layout>

            </v-container>
        </div>
      </v-img>
    </v-content>    
</template>

<script>
export default {
    name: 'signUp',
    data: () => ({
        imgUrl: 'https://ik.imagekit.io/ugyodiq15/african_lady_shopping_1_GqI3qX_Hs.png',
        icons: {
            mdiFacebook,
            mdiGoogle,
        }
    })

}
import {
    mdiFacebook,
    mdiGoogle,
} from '@mdi/js'
</script>

<style>
    #signUp{
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

    }
    #background-image {
        width: auto;
        height: auto;
        opacity: 0.9;
    }
</style>