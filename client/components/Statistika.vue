<template>
  <div style="height:100%">
   <v-card style="height: inherit" class="pa-2"> 
    <h4>Statistika</h4>
    <p>
      Mas nyni {{pocetBodu}} bodu.
      <br />
      Splnil jsi dosud {{SplneneUkolyPocet}} ukolu.
      <br />
      Ceka Te {{NesplneneUkolyPocet}} nesplnenych ukolu.
      <br />
      Vydrzel jsi {{pocetDni}} dni za sebou.
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
  }
};
</script>

<style>
</style>