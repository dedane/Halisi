<template>
    <div id="landing">
                
               <v-card class="mx-auto" max-width="500" > 
                   <v-toolbar
                      color="#2C5B86"
                      dark="">
                      <v-app-bar-nav-icon />
                      <v-spacer/>
                      <v-btn icon>
                          <v-icon>mdi-magnify</v-icon>
                      </v-btn>
                   </v-toolbar>

                    <v-container fluid>
                        <v-row-dense>
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
                            </v-btn>
                        </v-row-dense>
                    </v-container>
              </v-card> 
                
                
    </div>
</template>
<script>
export default {
    name: 'landing',
    data: () => ({
        cards: [
            {title: 'Person icon', src: 'https://ik.imagekit.io/ugyodiq15/curly_haired-removebg-preview_PUrp431lc.png', flex: 12},
            {title: 'Product to watch' ,src: 'https://ik.imagekit.io/ugyodiq15/closeup-removebg-preview_GduSQifCy.png', flex: 6},
            {title: 'Product of the week', src: 'https://ik.imagekit.io/ugyodiq15/Amana-Ndengu-1-removebg-preview_QopEgXuSJ6.png', flex: 6}
        ],
    }),
    
}
</script>
<style lang="scss">
    
    
</style>