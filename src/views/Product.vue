
<template>
    <v-content id="productpage">
        <section id="Product">
            <NavBar></NavBar>
            <div class="search"  >
                <div class="inform">
                    <h1>Let Us Guide You To Healthy Food</h1>
                    <h4 class="searching"> search for healthier food </h4>
            <v-layout class="bar">
                <v-input 
                    hide-details
                    dense 
                    dark
                    ma-6>
                    <v-text-field
                    label="eg Unga, colgate"
                    single-line
                    solo
                    solo-inverted
                    solo-flat
                    enclosed
                    rounded
                    append-icon="mdi-magnify">
                    </v-text-field>
                    </v-input>
            </v-layout>
                </div>
                <v-col>
                <v-img src="https://ik.imagekit.io/ugyodiq15/removebg-preview_5Hz7Wy0A6.png" absolute class="girl"></v-img>
                </v-col>
            </div>

            <div class="title">
                    <v-row>
                        <v-layout row wrap justify-center align-center justify-space-around>
                        <v-card-title primary-title class="display-3 ma-6 pa-4 Bold">
                                Products
                        </v-card-title>

                        
                        </v-layout>
                    </v-row>
                    <v-container fluid>
                        <v-row dense>
                            <v-col
                            v-for="card in cards"
                            :key="card.title"
                            :cols="card.flex">
                                <v-card class="ma-12">
                                    <v-img :src="card.src" class="black--text align-baseline justify-center space-between">
                                        <v-card-title  v-text="card.title"></v-card-title>
                                    </v-img>
                                </v-card>
                            </v-col>
                        </v-row>


                    </v-container>
            </div>


            <div class="featured">
                <v-row>
                    <v-container fluid>
                      
                        <v-row>
                        <v-layout row wrap justify-start align-start>
                            <v-card-title primary-title class="display-3 ma-6 pa-4 Bold">
                                Featured products
                            </v-card-title>
                        </v-layout>
                        </v-row>
                        <v-row>
                            <v-col
                            v-for="feature in features"
                            :key="feature.title"
                            :cols="feature.flex" >
                                <v-card class="ma-8">
                                    <v-img 
                                    :src="feature.src" 
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1),rgba(0,0,0,.5)"
                                    height="200px">
                                        <v-card-title  v-text="feature.title"></v-card-title>
                                    </v-img>
                                <v-card-actions>

                                    <v-btn icon>
                                        <v-icon>mdi-heart</v-icon>
                                        <v-text>Like</v-text>
                                    </v-btn>

                                    <v-spacer/>

                                    <v-btn>
                                        <v-icon>mdi-share-variant</v-icon>
                                        <v-text>Share</v-text>
                                    </v-btn>
                                </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
            </div>

            <div class="featured">
                <v-row>
                    <v-container fluid>
                      
                        
                        <v-row>
                            <v-col
                            v-for="feature in features"
                            :key="feature.title"
                            :cols="feature.flex" >
                                <v-card class="ma-8">
                                    <v-img 
                                    :src="feature.src" 
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1),rgba(0,0,0,.5)"
                                    height="200px">
                                        <v-card-title  v-text="feature.title"></v-card-title>
                                    </v-img>
                                <v-card-actions>

                                    <v-btn icon>
                                        <v-icon>mdi-heart</v-icon>
                                        <v-text>Like</v-text>
                                    </v-btn>

                                    <v-spacer/>

                                    <v-btn>
                                        <v-icon>mdi-share-variant</v-icon>
                                        <v-text>Share</v-text>
                                    </v-btn>
                                </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
            </div>


        </section>
    </v-content>
  
</template>

<script>
import NavBar from "@/components/NavBar"

export default {
    name: 'Product',
    components: {
      NavBar
    },
    data: () => ({
        cards: [
            {title: "Processed Food", src:"https://ik.imagekit.io/ugyodiq15/icons8-ingredients-480_phHh4VwAwQp.png",flex:3},
            {title: "Medicine", src:"https://ik.imagekit.io/ugyodiq15/icons8-pills-480_sqwyoontv.png",flex:3},
            {title: "PackagedFood", src:"https://ik.imagekit.io/ugyodiq15/icons8-cereal-480_eW26uM1SS.png",flex:3},
            {title: "Meat", src:"https://ik.imagekit.io/ugyodiq15/icons8-kawaii-steak-480_DuqQNoY5I.png",flex:3}
        ],
        features: [
            {title: "Alinsons own Bread" , src: "https://ik.imagekit.io/ugyodiq15/download__1__G_0Ro2-Lp.jpg", flex:4 },
            {title: "Tuna", src:"https://ik.imagekit.io/ugyodiq15/tuna_GrZP5K3El.jpg" , flex:4 },
            {title: "Indomine" , src: "https://ik.imagekit.io/ugyodiq15/download__2__odkGv2_zaCZ.jpg" , flex:4 },
        ]
    })

}
</script>

<style>
.search{
    position: relative;
    width: 100%;
    height: 500px;
    background: #569e33;
    margin: 0 auto;
    
}
.girl{
    position: absolute;
    width: 600px;
    height: 400px;
    top: 60px;
    left: 750px
}
.inform{
    position: absolute;
    left: 60px;
    top: 150px;
    font-size: 30px;
    color: #ffffff;
}
.searching{
    position: absolute;
    left: 180px;
    top: 80px;
    font-size: 25px;
    color: #c4c4c4;
}
.bar{
    position: relative;
    top: 140px;
}
.title{
    position: relative;
    top: 200px;
    text-align: center;
    font-size: 40px;
    top: 150px;

}
.featured{
    position: relative;
    top: 200px;
    text-align: center;
    font-size: 40px;
    top: 200px;
}

</style>