<template>
  <div>
      <h3>Název výzvy</h3>
      <p >{{game.name}}</p>

      <h3>Zadání</h3>

      <p> {{game.description}}</p>

      
  <v-card
    
    class="mx-auto"
  >
    <v-container class="pa-1">
      <v-item-group
        
        multiple
      >
        <v-row>
          <v-col
            v-for="kresba in kresby"
            v-bind:key="kresba.id"
            cols="12"
            md="2"
          >

            <kresba v-bind:kresba='kresba' />
            
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>



  </div>
</template>

<script>
import Kresba from '../../../components/Kresba';

export default {

    components: {
        kresba: Kresba
    },
    name: 'detai-galerie-hry',
    data() {
        return {
            kresby: [],
            game: []
        }
    },
    props: [''],

    created() {
        this.game = this.$store.getters['global/getGames'].find(game => game.id == this.$route.params.id)
        this.kresby = this.$store.getters['global/getKresby'].filter(kresba => kresba.game_id == this.$route.params.id)
    },
     
    

}
</script>

<style>

</style>