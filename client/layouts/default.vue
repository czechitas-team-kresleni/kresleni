
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
      color="grey lighten-1"
    >
    
  <div> 
    <p> Vitej zpet, {{user_name}}!</p>

      <v-avatar size="200px">
        <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
      </v-avatar>

      <hr />
      
   <v-progress-linear
      background-color="grey darken-1"
      color="grey darken-3"
      height="30"
      value="20"
    >
    </v-progress-linear>
 
    <hr>
       
     <div>
       {{user_level}} 
     </div>

   </div >
    
    
    </v-navigation-drawer>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app color="grey darken-3">
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
        
      ></v-app-bar-nav-icon>

      <v-toolbar-items color="grey darken-3">
        <v-btn  color="grey darken-3" to="/">Domu</v-btn>
        <v-btn  color="grey darken-3" to="/challenges/send">Dnesni</v-btn>
        <v-btn  color="grey darken-3" to="/challenges">Galerie</v-btn>
        <v-btn  color="grey darken-3">
          <span>Profil</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer :inset="footer.inset" app  color="grey darken-3">
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawers: ["Default (no property)", "Permanent", "Temporary"],
    user_name: "Pepa",
    user_level: "zelenac",
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
