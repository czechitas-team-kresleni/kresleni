<template>
  <div style="height:100%">
   <v-card style="height: inherit" class="pa-2 mr-2"> 
    
    
    <v-alert
      color="grey darken-2"
      dark
      dense
      
      icon= "mdi-account-circle-outline"
      class="text-center">
      <h4 style="font-weight: 400;">Statistika</h4>
    </v-alert>
     
    <div class="pa-4">
      POČET BODŮ:     {{user.exp}}
      <br />
      SPLNĚNÉ ÚKOLY:   {{user.finished_games}}
      <br />
      NESPLNĚNÉ ÚKOLY: {{user.unfinished_games}}       
      <br />
    </div>
   </v-card>
  </div>

    
</template>

<script>
export default {
  
  props: {
    user:{
      type: Object,
      default: {}
    }
  }
};
</script>

<style>
</style>