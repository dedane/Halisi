<template>
<div id="company">
    <v-card class="mx-auto"> 
    <NavBar></NavBar>
<v-container fluid>
    
  <v-row >
     <v-col class="info">   
        <v-flex >

            <v-layout row wrap justify-center justify-space-around>
        <div class="pa-6">
          <v-img  src="https://ik.imagekit.io/ugyodiq15/Halisi_pQwDn_AxS.png"/>
        </div>
       </v-layout>

            <v-layout row wrap justify-center align-center justify-space-around v-for="info in infos"
            :key="info.icon"  >
                <v-row class="display-1 ma-8 pa-8">
                
                <v-btn  fab dark large  color="#2041b3">
                <v-icon dark large>{{ info.icon }}</v-icon> 
                </v-btn>
                
                <v-col>
                <v-text style="color: #FFFFFF">
                      {{info.text}}  
                </v-text>
                </v-col>
                
                </v-row>
            </v-layout>
                 
            </v-flex>
                            
    </v-col>

    <v-col >
        <v-flex class="d-flex flex-row " justify-center>
             <v-card >
              <v-layout column  >
                  <v-card-title class="font-weight-medium display-2 justify-start ma-12">
                      Sign Up
                  </v-card-title>
                <v-form class="nt-4 mb-10" style="width: 500px">
                <v-text-field outlined placeholder="Company Name">
                </v-text-field>

                 <v-text-field outlined placeholder="Phone Number">
                </v-text-field>

                 <v-text-field outlined placeholder="Company Email">
                </v-text-field>

                 <v-text-field outlined append-icon="mdi-eye" placeholder="Password">
                </v-text-field>

                <v-layout justify-center align-center>
                <v-btn large block  class="mb-3" color="#2041b3" dark > Sign Up </v-btn>
                </v-layout>

                <v-card-title class="font-weight-medium display-1 justify-center"  ma-6>
                    or
                </v-card-title>

                <v-layout>
                <v-btn large block  class="mb-3" color="#54b029" dark > Sign In </v-btn>
                </v-layout>

                </v-form>
              </v-layout>
            </v-card>
                
        </v-flex>
    </v-col>
    </v-row>
</v-container>
</v-card>
<Footer></Footer> 

</div>

</template>

<script>

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default {
    name: 'company',
    component: {
         NavBar,
            Footer
    },
    data: () => ({
        infos: [
               {icon: 'mdi-account-outline' ,text:'join Us',color: "#2041b3"},
               {icon: 'mdi-comment-check-outline' ,text:'feedback on  products from a few clicks', color: "#43c8f2"},
               {icon: 'mdi-food-apple-outline' ,text:'Add  products for customer validation', color: "#54b029"},
               ]
    })

}
</script>

<style>

</style>