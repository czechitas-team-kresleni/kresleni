<template>

      
  <v-container class="grey lighten-5 ma-0">


      
    <v-row >
      <v-col 
      cols="12"
        sm="6"
      >
        <v-card
          class="pa-3"
          outlined
          tile
        >
          <h3>Název</h3>
      <p>{{game.name}}</p>

      <h3>Popis</h3>

      <p>{{game.description}}</p>

      <h3> Počet bodů</h3>

      <div>
          {{game.exp}}
        </div>
        </v-card>
      </v-col>
      <v-col 
      cols="12"
        sm="6"
        
      >
        <v-card
          class="pa-3"
          outlined
          tile
        >

        <div>
        <h3> Nahrát</h3>
        <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
        ></v-file-input>
       
        <div>
        <h3> Vlastní poznámky:</h3>
        <v-textarea
          solo
          name="input-7-4"
          label="Sem si můžeš napsat poznámku"
            ></v-textarea>

         <v-btn block color="grey" dark>Block Button</v-btn>
            
        </div>

        </div>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
      






<script>
export default {
  data () {
    return {
      
    }
  },


  computed: {
    game() {
      return this.$store.getters['global/getGames'].find(game => game.id== this.$route.params.id);
    }
  }

}
</script>

<style>

</style>