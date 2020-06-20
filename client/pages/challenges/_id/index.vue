<template>
  <div>
      <h3>Název výzvy</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ducimus.</p>

      <h3>Zadání</h3>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti expedita iusto laudantium accusamus dicta repellendus sit, distinctio cupiditate dolor repudiandae, culpa, aperiam nam esse enim maiores? Cumque ipsa quod et facere modi laborum rerum delectus inventore quisquam enim, eligendi explicabo aspernatur voluptatum vel repellat commodi odio facilis. Excepturi, corporis nam.</p>

      
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
            :key="kresba.id"
            cols="12"
            md="2"
          >

          <kresba :kresba='kresba' />
            
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
            kresby: []
        }
    },

    created() {
        this.kresby = this.$store.getters['global/getKresby'].filter(kresba => kresba.game_id == this.$route.params.id)
    }

}
</script>

<style>

</style>