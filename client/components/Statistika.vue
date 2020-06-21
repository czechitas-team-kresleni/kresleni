<template>
  <div style="height:100%">
   <v-card style="height: inherit" class="pa-2"> 
    <h4>Statistika</h4>
    <p>
      Mas nyni {{user.exp}} bodu.
      <br />
      Splnil jsi dosud {{user.finished_games}} ukolu.
      <br />
      Ceka Te {{user.unfinished_games}} nesplnenych ukolu.
      <br />
    </p>
   </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pocetBodu: 60,
      SplneneUkolyPocet: 10,
      NesplneneUkolyPocet: 20,
      pocetDni: 50
    };
  },
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