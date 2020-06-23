<template>
  <div class="grey lighten-5 ma-0">
    <h2>Dnešní výzva je: {{game.name}}</h2>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card class="pa-3 h-100">
              <h4 class="mt-5">Název</h4>
      
            <p class="px-4">{{game.name}}</p>

            <h4 class="mt-5"> Popis </h4>
            <p class="px-4">{{game.description}}</p>

            <h4 class="mt-5">Počet bodů </h4>

            <div class="px-4">{{game.exp}}</div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6">
          <v-card class="pa-3 h-100">
            <h4 class="mt-5">Nahrát</h4>
            <v-file-input label="Nahrát kresbu" prepend-icon="mdi-camera"></v-file-input>

            <h4 class="mt-5">Link</h4>
            <v-text-field label="odkaz" v-model="link" hide-details="auto"></v-text-field>

            <h4 class="mt-5">Vlastní poznámky</h4>
            <v-textarea solo name="input-7-4" label="Sem můžeš napsat poznámku" v-model="note"></v-textarea>

            <v-btn
              block
              color="grey darken-3"
              dark
              v-on:click="sendForm"
              v-if="!hasSent"
            >Nahrát kresbu a poznámky</v-btn>
            <strong v-else>Dnešní výzvu jsi již splnil/a</strong>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
      






<script>
export default {
  data() {
    return {
      file: "",
      note: "",
      link: ""
    };
  },

  computed: {
    hasSent() {
      return this.$store.getters["global/getKresby"].find(
        kresba => kresba.game_id == this.$route.params.id && kresba.user_id == 1
      );
    },
    game() {
      return this.$store.getters["global/getGames"].find(
        game => game.id == this.$route.params.id
      );
    }
  },

  methods: {
    sendForm() {
      let last_kresba = this.$store.getters["global/getKresby"].slice(-1)[0];
      let new_id = last_kresba.id + 1;
      this.$store
        .dispatch("global/addKresba", {
          id: new_id,
          file: this.file,
          note: this.note,
          link: this.link,
          user_id: 1,
          game_id: this.game.id,
          likes: 0
        })
        .then(() => {
          this.$router.push("/kresba/" + new_id);
        });
    }
  }
};
</script>

<style>
</style>