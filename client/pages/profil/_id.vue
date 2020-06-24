<template>
  <div>
    <h2>{{user.name}}</h2>
    <div style="display: flex;
    align-items: center;
    justify-content: space-between;">
      <blockquote class="blockquote">
        <p class="m-4">{{user.text}}</p>
      </blockquote>
      <v-avatar size="80px" class="pa-4" tile>
        <img alt="Avatar" v-bind:src="user.foto" />
      </v-avatar>
    </div>

    <div class="ml-4 mt-0">
      <a href="http://www.facebook.com" target="_blank" style="text-decoration:none;"><v-icon>{{'mdi-facebook'}}</v-icon></a>
      <a href="http://www.instagram.com" target="_blank" style="text-decoration:none;"><v-icon>{{'mdi-instagram'}}</v-icon></a>
      <a href="http://www.artstation.com" target="_blank" style="text-decoration:none;"><v-icon>{{'mdi-artstation'}}</v-icon></a>
    </div>
  

    <v-divider></v-divider>
    <v-container fluid>
      <v-row class="mb-6 levels" no-gutters>
        <v-col v-for=" level in levels" :key="level.id">
          <v-card
            class="pa-2 text-center levels-row level_text_size"
            :class="{level_unlocked:level.uroven <= user.level.uroven, level_locked: level.uroven > user.level.uroven}"
            tile
            outlined
            style="text-transform: uppercase;"
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
    </v-container>

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