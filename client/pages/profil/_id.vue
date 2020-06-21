<template>
  <div>
    <h2 style="text-align: center; font-weight: 400;">{{user.name}}</h2>
    <div style="display: flex;
    align-items: center;
    justify-content: space-between;">
      <blockquote class="blockquote">{{user.text}}</blockquote>
      <v-avatar size="80px" class="pa-4" tile>
        <img alt="Avatar" v-bind:src="user.foto" />
      </v-avatar>
    </div>

    <div class="ml-4 mt-0">
      <v-icon>{{'mdi-facebook'}}</v-icon>
      <v-icon>{{'mdi-instagram'}}</v-icon>
      <v-icon>{{'mdi-artstation'}}</v-icon>
    </div>

    <v-divider></v-divider>

    <v-row class="mb-6 levels" no-gutters>
      <v-col v-for=" level in levels" :key="level.id">
        <v-card
          class="pa-2 text-center levels-row"
          :class="{level_unlocked:level.uroven <= user.level.uroven, level_locked: level.uroven > user.level.uroven}"
          tile
          outlined
        >
          {{level.nazev}}
          <v-icon v-if="level.uroven > user.level.uroven" style="float: right;">{{ 'mdi-lock'}}</v-icon>
          <v-icon
            v-else
            style="float: right; vertical-align: middle"
          >{{ 'mdi-lock-open-variant-outline'}}</v-icon>
        </v-card>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="mb-9" no-gutters>
      <v-col sm="5" md="6">
        <statistika :user="user" />
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <galerie :user="user" />
      </v-col>
    </v-row>
  </div>
</template>



<script>
import Mojegalerie from "../../components/Mojegalerie.vue";
import Statistika from "../../components/Statistika.vue";
export default {
  layouts: "default",
  name: "profil",
  components: {
    galerie: Mojegalerie,
    statistika: Statistika
  },

  data: () => ({
    exp: 450,
    previous_threshold: 300,
    next_threshold: 600,
    user_level: "zelenac"

    //progress: 150,
  }),

  computed: {
    calculatePercent() {
      return (
        ((this.exp - this.previous_threshold) * 100) /
        (this.next_threshold - this.previous_threshold)
      );
    },
    user() {
      return this.$store.getters["global/getUsers"].find(
        user => user.id == this.$route.params.id
      );
    },

    levels() {
      return this.$store.getters["global/getLevels"];
    }
  }
};
</script>

<style>
.levels {
  line-height: 5rem;
}

.levels-row {
  display: flex;
  justify-content: space-around;
}

.level_unlocked {
  background-color: #616161 !important;
  color: #e0e0e0 !important;
}

.level_locked {
  color: lightgrey !important;
}
</style>