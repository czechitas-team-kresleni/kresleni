<template>
  <div>
      <h3 class="text-left ml-3">Název výzvy</h3>
       
  <v-row>
    <v-col cols="12" >
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="n in 6"
              :key="n"
              class="d-flex child-flex"
              cols="2"
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
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

}
</script>

<style>

</style>