
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
    ></v-navigation-drawer>

    <v-app-bar
      :clipped-left="primaryDrawer.clipped"
      app
    >
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>



      <v-toolbar-items>
         <v-btn ><a href="/" class="menu_item">Úvod</a></v-btn>
         <v-btn><a href="/challenges/send" class="menu_item">Dnešní Challenge</a></v-btn>
         <v-btn ><a href="/challenges" class="menu_item">Galerie</a></v-btn>
         <v-btn ><span class="menu_item">Profil</span></v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer
      :inset="footer.inset"
      app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'permanent',
        clipped: true,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
    }),
    async fetch() {
      this.$store.dispatch('global/fetchItems');
    }
  }
</script>
