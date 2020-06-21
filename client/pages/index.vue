<template>
  <div>
    <h2 style="text-align: center; font-weight: 400;">Vítej v partě!</h2>
    <blockquote class="blockquote">
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque mollitia amet voluptatibus sunt tempora commodi exercitationem cumque natus dicta? Repudiandae, cumque. Minus, placeat aperiam excepturi consequuntur labore ducimus quam.</p>
    
    </blockquote>
    <v-btn block color="grey darken-2" dark>Mrkni se na dnešní výzvu</v-btn>

    <v-divider></v-divider>

    <div>
      <h3 style="text-align: center;  font-weight: 400;">Podívej se, jak si vedou ostatní:</h3>
      <div class="d-flex ma-6" style="justify-content: space-between;">
        <radek />
        <radek />
        <radek />
      </div>
    </div>
  </div>
</template>

<script>
import Radek from "./../components/Radek.vue";
export default {
  components: {
    radek: Radek
  },
  data() {
    return {
      user_name: 'Pepa',
    };
  }
};
</script>

<style>
</style>