<template>
  <div>
    <h2>Vítej v kreslírně!</h2>
    <blockquote>
      <p
        class="m-4"
      >Kreslíš rád/a a chceš se zlepšovat? Bez tréninku to nepůjde. Nejlepší je každý den něco nakreslit. Proto tu jsme s denními výzvami. Je jen na tobě, jestli najdeš čas, zkusíš výzvu splnit a sdílet tvoje kresby s ostatními. Kam se posuneš za měsíc? Co dokáží ostatní? Chceš to zjistit? Stačí se přidat! </p>
    </blockquote>
    <v-btn
      block
      color="grey darken-3"
      dark
      :to="'/challenges/send/' + last"
    >Mrkni se na dnešní výzvu</v-btn>

    <v-divider></v-divider>

    <div>
      <h3 style="text-align: center" class="ma-7">Výzvy, které jsi zatím nesplnil/a</h3>
      <p
        class="m-4"
      >Nestihl/a jsi splnit výzvu v den, kdy byla zadána? Nevadí, můžeš se s ní vypořádat dodatečně. Tady najdeš přehled výzev, které jsi zatím nesplnil/a. Když na výzvu klikneš, budeš ji moci splnit dodatečně.</p>
      <div class="d-flex ma-6" style="justify-content: space-between;">
        
        <v-alert
          color="grey darken-3"
          dark
          dense
          icon="mdi-draw"
          style="width: 250px;"
          v-for="game in games"
          :key="game.id"
        >
          <span v-on:click="redirect(game.id)" class="clickable">{{ game.name }}</span>
        </v-alert>
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
    games() {
      let odevzdane = this.$store.getters["global/getKresby"].filter(
        kresba => kresba.user_id == 1
      );
      let games = [];
      odevzdane.forEach(element => {
        games.push(element.game_id);
      });
      return this.$store.getters["global/getGames"].filter(
        game => !games.includes(game.id)
      );
    },
    last() {
      return this.$store.getters["global/getGames"].slice(-1)[0].id;
    }
  },
  methods: {
    redirect(id) {
      return this.$router.push("/challenges/send/" + id);
    }
  }
};
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
