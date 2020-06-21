
<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="true"
      app
      overflow
      class="text-center"
      color="grey lighten-1"
      
    >
      <div>
      

        <b-alert show class="welcome_user my-0 pa-4">Vitej zpet, {{user_name}}!</b-alert>


      <v-divider class="my-3"></v-divider>

        <v-avatar size="200px" class="pa-4">
          <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
        </v-avatar>

     <v-divider class="my-3"></v-divider>

        <v-progress-linear
          background-color="grey darken-1"
          color="grey darken-3"
          height="30"
          value="55"
        >
         <template>
        <strong> {{exp}}/{{next_threshold}} bodu</strong>
      </template>
        </v-progress-linear>

<v-divider class="my-3"></v-divider>      
        <b-alert show class="sidebar-level pa-4">{{user_level}}</b-alert>
       
      </div>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app color="grey darken-3">
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>

      <v-toolbar-items color="grey darken-3">
        <v-btn color="grey darken-3" to="/">
          <span class="light_text">Domu</span>
        </v-btn>
        <v-btn color="grey darken-3" to="/challenges/send">
          <span class="light_text">Dnesni</span>
        </v-btn>
        <v-btn color="grey darken-3" to="/challenges">
          <span class="light_text">Galerie</span>
        </v-btn>
        <v-btn color="grey darken-3" to="/profil">
          <span class="light_text">Profil</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main style="background-color:#FAFAFA">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :inset="footer.inset" app color="grey darken-3">
      <span class="px-4 light_text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    user_name: "Pepa",
    user_level: "zelenac",
    exp: 450,
    next_threshold: 600,
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
  async fetch() {
    this.$store.dispatch("global/fetchItems");
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
</style>
