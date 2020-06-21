<template>
  <div>

      <div  class="d-flex" style="justify-content: space-between">
           <h3 class="text-left ml-3">{{title}}</h3>
           <v-btn class="float-right" :to="'/challenges/' + game.id">Celá galerie</v-btn>
      </div>
     
      
       
  <v-row>
    <v-col cols="12" >
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="kresba in kresby"
              :key="kresba.id"
              class="d-flex child-flex"
              cols="2"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="kresba.link"
                  aspect-ratio="1"
                  class="grey lighten-2 clickable"
                  v-on:click="redirect(kresba.id)"
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
    </v-col>
  </v-row>
          

  </div>
</template>

<script>
export default {
  props: {
    kresby: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: 'vyzva'
    },
    game: {
      type: Object,
      default: {}
    }
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
    cursor: pointer
  }
</style>