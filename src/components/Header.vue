<template>
  <v-toolbar
                      color="#3F6990"
                      dark="">
                      <v-img src="https://ik.imagekit.io/ugyodiq15/Halisi_pQwDn_AxS.png" max-width="100" max-height="100"/>                    
                        <v-spacer/>

                        <v-btn class="text-center mx-4" text>
                            Products
                        </v-btn>
                        <v-btn class="text-center mx-4" text>
                            Companies
                        </v-btn>
                        <v-btn class="text-center mx-8" text>
                            About Us
                        </v-btn>

                      <v-btn class="text-center mx-2 " rounded outlined color="#6FCF97" @click="$router.push('Login')">  
                          Login
                      </v-btn>

                      <v-btn class="text-center mx-2" rounded color="#6FCF97" @click="$router.push('SignUp')">  
                          Register    
                      </v-btn>
                   </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>