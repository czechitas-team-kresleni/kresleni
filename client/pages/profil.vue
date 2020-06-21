<template>
  <div>
    <div>
      <h2 style="text-align: center; font-weight: 400;">Username</h2>
      <blockquote
        class="blockquote"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita tempore laboriosam eum eos quas maiores praesentium beatae pariatur molestiae. Voluptates ut nisi unde eius esse quos ipsum nihil inventore aspernatur?</blockquote>
      <div class="ml-4 mt-0">
        <v-icon>{{'mdi-facebook'}}</v-icon>
        <v-icon>{{'mdi-instagram'}}</v-icon>
        <v-icon>{{'mdi-artstation'}}</v-icon>
      </div>
    </div>
    <v-divider></v-divider>
    <v-row class="mb-6 levels" no-gutters>
      <v-col v-for="n in 5" :key="n">
        <v-card
          class="pa-2 text-center levels-row"
          :class="{level_unlocked: n === 1, level_locked: n !== 1}"
          tile
          outlined
        >
          {{user_level}}
          <v-icon v-if="n != 1" style="float: right;">{{ 'mdi-lock'}}</v-icon>
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
        <statistika />
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <galerie />
      </v-col>
    </v-row>
  </div>
</template>



<script>
import Mojegalerie from "../components/Mojegalerie.vue";
import Statistika from "../components/Statistika.vue";
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