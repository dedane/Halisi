<template>
    <div id="landing">
                
               <v-card class="mx-auto"  > 
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

                    <v-container fluid>
                    <v-row >
                        <v-col>  
                            
                            <v-flex >
                          <v-layout row wrap justify-center align-center justify-space-around>
                            <v-card-title primary-title class="display-2 ma-6 pa-4">
                                validate all food products
                             </v-card-title>
                             
                             
                                <v-card-text class="text-center ">
                                    live a long and healthy life protect yourself
                                </v-card-text>
                           
                          </v-layout>
                             <v-layout  row wrap justify-center align-center justify-space-around >
                               <v-btn  color="success"  class="">Scan Now</v-btn>
                             </v-layout>
                            </v-flex>
                            
                        </v-col>

                        <v-col >
                            <v-flex class="d-flex flex-row mb-6" justify-end>
                                <v-img max-height="1000" src='https://ik.imagekit.io/ugyodiq15/QR_app_urlx_N9aS.png'></v-img> 
                            </v-flex>

                        </v-col>
                    </v-row>

                    <v-row >

                        <v-col >
                            <v-flex class="d-flex flex-row mb-6" justify-end>
                                <v-img max-width="500" src='https://ik.imagekit.io/ugyodiq15/tracking_1_62WryAHv4o.png'></v-img> 
                            </v-flex>

                        </v-col>

                        <v-col>  
                            
                            <v-flex >
                          <v-layout row wrap justify-center align-center justify-space-around>
                            <v-card-title primary-title class="display-2 ma-6 pa-4">
                                Locate origins of your food
                             </v-card-title>
                             
                             
                                <v-card-text class="text-center ">
                                    with halisi you can monitor the location of your products
                                </v-card-text>
                           
                          </v-layout>
                             <v-layout  row wrap justify-center align-center justify-space-around >
                               <v-btn  color="success"  class="">Learn More</v-btn>
                             </v-layout>
                            </v-flex>
                            
                        </v-col>

                        
                    </v-row>

                    <v-row >
                        <v-col>  
                            
                            <v-flex >
                          <v-layout row wrap justify-center align-center justify-space-around>
                            <v-card-title primary-title class="display-2 ma-6 pa-4">
                                Standards set
                             </v-card-title>
                             
                             
                                <v-card-text class="text-center ">
                                    Standards set in simple and understanding ways
                                </v-card-text>
                           
                          </v-layout>
                             <v-layout  row wrap justify-center align-center justify-space-around >
                               <v-btn  color="success"  class="">Learn More</v-btn>
                             </v-layout>
                            </v-flex>
                            
                        </v-col>

                        <v-col >
                            <v-flex class="d-flex flex-row mb-6" justify-end>
                                <v-img max-width="500" src='https://ik.imagekit.io/ugyodiq15/raw-vegetables-vector-1711893-1453194_1_9V55gdQQkn.png'></v-img> 
                            </v-flex>

                        </v-col>
                    </v-row>

                    <v-row >

                        <v-col >
                            <v-flex class="d-flex flex-row mb-6" justify-end>
                                <v-img max-width="500" src='https://ik.imagekit.io/ugyodiq15/shop-3629607_1280_1_vWgJlWh5j.png'></v-img> 
                            </v-flex>

                        </v-col>

                        <v-col>  
                            
                            <v-flex >
                          <v-layout row wrap justify-center align-center justify-space-around>
                            <v-card-title primary-title class="display-2 ma-6 pa-4">
                                'Validated companies'
                             </v-card-title>
                             
                             
                                <v-card-text class="text-center ">
                                    Check your validated products from the company they come from
                                </v-card-text>
                           
                          </v-layout>
                             <v-layout  row wrap justify-center align-center justify-space-around >
                               <v-btn  color="success"  class="">Scan Now</v-btn>
                             </v-layout>
                            </v-flex>
                            
                        </v-col>

                        
                    </v-row>
                    
                    <v-card class="mx-auto" max-width="700" color="#009587">
                    </v-card>
                       <!-- <v-col
                             <v-col
                                v-for="card in cards"
                                :key="card.title"
                                :cols="card.flex">
                            <v-card>
                                <v-img
                                :src="card.src"
                                class="white--text align-end "
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px" >
                                <v-card-title v-text="card.title"></v-card-title>
                                </v-img>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                            
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>

                            </v-card-actions>
                            </v-card>
                            </v-col>
                            <v-btn
                                color="success"
                                dark
                                large
                                absolute
                                bottom
                                right
                                fab >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn> -->
                     
                    </v-container>
              </v-card> 

  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
                
                
    </div>
  
</template>
<script>
export default {
    name: 'landing',
    data: () => ({
        foods: [
            {title: 'validate all food products  ', subtitle: 'live a long and healthy life protect yourself' ,src: 'https://ik.imagekit.io/ugyodiq15/QR_app_urlx_N9aS.png'},
            {title: 'Locate origins of your food',subtitle: 'with halisi you can monitor the location of your products' ,src: 'https://ik.imagekit.io/ugyodiq15/tracking_1_62WryAHv4o.png'},
            {title: 'Standards set',subtitle: 'Standards set in simple and understanding ways', src: 'https://ik.imagekit.io/ugyodiq15/raw-vegetables-vector-1711893-1453194_1_9V55gdQQkn.png'},
            {title: 'Validated companies',subtitle: 'Check your validated products from the company they come from',  src: 'https://ik.imagekit.io/ugyodiq15/shop-3629607_1280_1_vWgJlWh5j.png'}
        ],
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram ',
      ],
    }),
    
}
</script>
<style lang="scss">
    
    
</style>