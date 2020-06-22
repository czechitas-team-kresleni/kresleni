<template>
  <div>
    <h2>Vítej v partě!</h2>
    <blockquote class="blockquote">
      
      <p class="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque mollitia amet voluptatibus sunt tempora commodi exercitationem cumque natus dicta? Repudiandae, cumque. Minus, placeat aperiam excepturi consequuntur labore ducimus quam.</p>
    
    </blockquote>
    <v-btn block color="grey darken-2" dark>Mrkni se na dnešní výzvu</v-btn>

    <v-divider></v-divider>

    <div>
      <h3 style="text-align: center" class="ma-7">Výzvy, které jsi zatím nesplnil/a</h3>
      <p class="m-4">Nestihl/a jsi splnit výzvu v den, kdy byla zadána? Nevadí, můžeš se s ní vypořádat dodatečně. Tady najdeš přehled výzev, které jsi zatím nesplnil/a. Když na výzvu klikneš, budeš ji moci splnit dodatečně.</p>
      <div class="d-flex ma-6" style="justify-content: space-between;">
        <div v-for="game in games" :key="game.id">
          <span v-on:click="redirect(game.id)" class="clickable">{{ game.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Radek from "./../components/Radek.vue";
export default {
  components: {
    radek: Radek
  },
  
  computed: {
    games(){
      let odevzdane = this.$store.getters['global/getKresby'].filter(kresba => kresba.user_id == 1);
      let games = [];
      odevzdane.forEach(element => {
        games.push(element.game_id)
      });
      return this.$store.getters['global/getGames'].filter(game => !games.includes(game.id))
    }
  },
  methods: {
    redirect(id) {
      return this.$router.push('/challenges/send/' + id)
    }
  }
};
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>