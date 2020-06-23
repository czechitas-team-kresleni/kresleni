<template>
  <div style="height:100%">
     

      <v-card style="height: inherit" class="pa-2 ml-2">
<v-alert
      color="grey darken-3"
      dark
      dense
      
      icon= "mdi-image-frame"
      class="text-center">
      <h4 style="font-weight: 400;">Moje díla</h4>
    </v-alert>
        
        <v-container fluid class="pa-4">
          <v-row>
            <v-col
              v-for="image in images"
              :key="image.id"
              class="d-flex child-flex"
              cols="2"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="image.link"
                  aspect-ratio="1"
                  class="grey lighten-2 clickable"
                  @click="redirect(image.id)"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
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
  },
computed: {
  images() {
      return this.$store.getters['global/getKresby'].filter(kresba => kresba.user_id == this.user.id)
    },
},

methods: {
  redirect(id) {
            this.$router.push('/kresba/' + id)
        }
}

}
</script>

<style>
.clickable {
  cursor: pointer;
}

</style>