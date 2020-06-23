<template>
  <div>
    <h2>Předchozí výzvy</h2>
    <blockquote>
      <p
        class="m-4"
      >Tady se můžeš podívat, jak se s výzvami vyrovnali ostatní, stačí kliknout na vybranou výzvu</p>
    </blockquote>

    <v-divider></v-divider>
    <radek
      v-for="game in games"
      :game="game"
      :key="game.id"
      :title="game.name"
      :kresby="getKresby(game.id)"
    ></radek>
  </div>
</template>

<script>
import Radek from "../../components/Radek.vue";

export default {
  name: "challenges",
  layout: "default",

  components: {
    radek: Radek
  },

  data() {
    return {
      games: []
    };
  },

  created() {
    this.games = this.$store.getters["global/getGames"];
  },

  methods: {
    getKresby(game_id) {
      let kresby = this.$store.getters["global/getKresby"].filter(
        kresba => kresba.game_id === game_id
      );
      if (kresby.length > 6) {
        return kresby.slice(5);
      }
      return kresby;
    }
  }
};
</script>

<style>
</style>