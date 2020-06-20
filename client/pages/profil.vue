<template>
  <div>
    <v-row class="mb-9 mt-9" no-gutters>
      <v-col>
        <v-card class="pa-2" >
          <h4>Username</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eligendi obcaecati odio nam, asperiores dolores sint similique. Voluptates cum minima, veritatis reprehenderit vitae delectus tenetur harum maxime, expedita minus autem!</p>
        </v-card>
      </v-col>
      <v-col lg="2">
        <v-card class="pa-2">
          <v-img width="100px" height="100px" src="https://picsum.photos/200/300" position="center"></v-img>
        </v-card>

      </v-col>
    </v-row>

   <v-progress-linear
      :value="calculatePercent"
      color="blue-grey"
      height="25"
      buffer-value="500"
    >
      <template>
        <strong>{{ Math.ceil(exp) }} bodu</strong>
      </template>
    </v-progress-linear>

    <div class="d-flex" style='justify-content: space-between'>
      <div>{{ previous_threshold }}</div>
      <div>{{ next_threshold }}</div>
    </div>

    <br>

    <v-row class="mb-6 mt-6" height="25px" no-gutters>
      <v-col cols-12>
        <v-card tile height="30px" class="text-center" >
         
         <div> {{user_level}} </div>
          
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-9" no-gutters>
      <v-col sm="5" md="6" >
            <statistika />
      </v-col>
      <v-col sm="5"  offset-sm="2" md="6" offset-md="0">

       <galerie />
     
      </v-col>
    </v-row>
  </div>
</template>



<script>
import Mojegalerie from "../components/Mojegalerie.vue"
import Statistika from "../components/Statistika.vue"
export default {
  layouts: "default",
  name: "profil",
  components:{
      galerie: Mojegalerie,
      statistika: Statistika
  },

  data: () => ({
    ttt: 34,
    exp: 450,
    previous_threshold: 300,
    next_threshold: 600,
    user_level: "zelenac"

    //progress: 150,
  }),

  computed: {
    calculatePercent() {
      return ((this.exp - this.previous_threshold) * 100) / (this.next_threshold - this.previous_threshold);
    }
  }
  

};
</script>

<style>
.obrazek {
  width: 100px;
  height: 100px;
}

.container1 {
  display: flex;
}

.container2 {
  display: flex;
  flex-basis: column;
}


</style>