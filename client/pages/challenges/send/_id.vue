<template>

      
  <div class="grey lighten-5 ma-0"  >

    <h2 style="text-align: center; font-weight: 400;">Dnešní výzva</h2>
      
    <v-row >
      <v-col 
      cols="12"
        sm="6"
      >
        <v-card
          class="pa-3"
          outlined
          tile
        >
          <h3>Název</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, facilis.</p>

      <h3>Popis</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit harum, saepe beatae ea quo aliquid ratione iusto excepturi alias quod iure molestias id commodi incidunt aperiam mollitia similique, corporis expedita consequuntur consequatur blanditiis! Quod possimus mollitia veniam asperiores voluptatum, explicabo cumque dicta nulla dolores earum voluptatibus maiores ut dolore impedit ipsum ad voluptate, expedita quo nemo error iste aspernatur.</p>

      <h3> Počet bodů</h3>

      <div>
          3
        </div>
        </v-card>
      </v-col>
      <v-col 
      cols="12"
        sm="6"
        
      >
        <v-card
          class="pa-3"
          outlined
          tile
        >

        <div>
        <h3> Nahrát</h3>
        <v-file-input
        label="File input"
        filled
        prepend-icon="mdi-camera"
        ></v-file-input>
       
        <div>
        <h3> Vlastní poznámky:</h3>
        <v-textarea
          solo
          name="input-7-4"
          label="Sem si můžeš napsat poznámku"
            ></v-textarea>

         <v-btn block color="grey" dark>Block Button</v-btn>
            
        </div>

        </div>

        </v-card>
      </v-col>
    </v-row>
  </div>

</template>
      






<script>
export default {

}
</script>

<style>

</style>