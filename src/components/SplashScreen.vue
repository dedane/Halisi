<template>
  <div class="{loader: true, fadeout: !isLoading }">
    <v-container class="my-5" align-center justify-center>
      <v-layout row wrap justify-center justify-space-around>
        <div >
          <v-img  src="https://ik.imagekit.io/ugyodiq15/Halisi_pQwDn_AxS.png"/>
        </div>
       </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
    name: "loadingScreen",
    props: ['isLoading']
  }
</script>

<style>
.loader  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 100vh;
    background-color: #569e33;
    background-size: cover;
  }
  .fadeout{
    animation: fadeout 2s forwards;
  }
  @keyframes fadeout {
    to {
      opacity: 0;
      visibility: hidden;
    }
    
  }
  

</style>