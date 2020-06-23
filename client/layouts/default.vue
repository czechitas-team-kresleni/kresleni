
<template>
  <v-app>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="true"
      app
      overflow
      class="text-center hideable"
      color="grey lighten-1"

    >
      <div>

        <b-alert show class="welcome_user my-0 pa-4">Ahoj, {{user.name}}!</b-alert>

        <v-divider class="my-3"></v-divider>

        <v-avatar size="200px" class="pa-4">
          <img alt="Avatar" v-bind:src="user.foto" />
        </v-avatar>

        <v-divider class="my-3"></v-divider>

        <div style="justify-content: space-between" class="d-flex mx-1">
          <div>{{ user.level.threshold }}</div>
          <div>{{ user.level.next_threshold}}</div>
        </div>

        <v-progress-linear
          background-color="grey darken-1"
          color="grey darken-3"
          height="30"
          class="mx-1 mb-3"
          v-bind:value="user.level.progress"
          >

          <strong v-if="!user.level.max"> {{user.exp}}/{{user.level.next_threshold}} {{ points(user.exp) }}</strong>
          <strong v-else> max level</strong>

        </v-progress-linear>

        <div class="text-center" v-if="!user.level.max">
          Chybí Ti <strong>{{user.level.exp_needed}}</strong> {{ points(user.level.exp_needed) }} do další úrovně. Jen tak dál!
        </div>

        <v-divider class="my-3"></v-divider>
        <b-alert show color="grey darken-3" class="sidebar-level pa-4 mx-3">{{user.level.nazev}}</b-alert>

      </div>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app color="grey darken-3">
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        >
      </v-app-bar-nav-icon>

      <v-toolbar-items color="grey darken-3">
        <v-btn color="grey darken-3" to="/">
          <span class="light_text">Domu</span>
        </v-btn>
        <v-btn color="grey darken-3" :to="'/challenges/send/' + last">
          <span class="light_text">Dnesni</span>
        </v-btn>
        <v-btn color="grey darken-3" to="/challenges">
          <span class="light_text">Galerie</span>
        </v-btn>
        <v-btn color="grey darken-3" to="/profil/1">
          <span class="light_text">Profil</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main style="background-color:#FAFAFA" class="md-padding">
      <v-container fluid>
        <span class="clickable" @click="back" style="text-decoration: underline;">zpět</span>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :inset="footer.inset" app color="grey darken-3">
      <span class="px-4 light_text text-center">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "permanent",
      clipped: true,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    }
  }),
  created () {
    this.$store.dispatch("global/fetchItems");

  },
  computed: {
    user() {
      return this.$store.getters['global/getUsers'].find(clovek => clovek.id === 1)
    },
    last() {
      return this.$store.getters['global/getGames'].slice(-1)[0].id
    }
  },
  methods: {
    points(exp) {
      if(exp===1) {
        return 'bod'
      } else if (exp>=2 && exp<=4){
        return 'body'
      } else {
        return 'bodů'
      }
    },
    back() {
      this.$router.back()
    }
  }
};
</script>

<style>
.light_text {
  color: #f5f5f5;
}

.sidebar-level {
  color: #E0E0E0;
  background-color: #424242;;
  text-transform: uppercase;
  font-weight: 600 ;
  border: none
}

.welcome_user {
  color: black;
  background-color: #BDBDBD;;
  font-weight: 400 ;
  border: none;
  font-size: 24px;
}

.clickable {
  cursor: pointer;
}

body{
  font-family: 'Roboto', sans-serif;


}

h1,
h2,
h3,
h4 {
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
}
h2,
h4,
h3 {
  text-shadow: 0px 1px 2px  #BDBDBD;
}

h2 {
  text-align: center;
  font-weight: 400;
}

p {
  font-style: normal;
  font-weight: normal;
 }

@media(max-width:1200px){
  .hideable {
    display: none;
  }

  .md-padding {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
</style>
