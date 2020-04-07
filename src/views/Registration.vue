<template>
  <div id="Registration">
    <v-container class="my-5" align-center justify-center>

      <v-layout row wrap justify-center justify-space-around>
         <v-flex xs6 md3>
        <div class="text-center">
          <v-img  src="https://ik.imagekit.io/ugyodiq15/logo_54uezWGFS.png"/>
        </div>
         </v-flex>
       </v-layout>

       <v-layout row wrap justify-center justify-space-around>
        <div class="pa-6">
          <v-img  src="https://ik.imagekit.io/ugyodiq15/Halisi_pQwDn_AxS.png"/>
        </div>
       </v-layout>

       <v-layout row wrap justify-center justify-space-around ma-4>
         <v-flex xs12 md5>
        <v-text class="text-center white--text">
            Make sure whatever you consume is safe for you and your family
        </v-text>
         </v-flex>
       </v-layout>

        <v-layout row wrap justify-center  justify-space-around ma-6>
          <v-flex xs7 md5 justify-space-around mb-4>
            <v-btn color="success" block outlined large>Sign In</v-btn>
          </v-flex>
          <v-flex xs7 md5 justify-space-around mb-4 >
            <v-btn color="success" block rounded large>Sign Up</v-btn>
          </v-flex>
         </v-layout>

        
     
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #Registration {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #2C5B86;
    background-size: cover;
  }
  
</style>