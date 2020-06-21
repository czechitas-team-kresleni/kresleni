<template>
<div>
    <v-img
                :src="kresba.link"
                height="500"
                class="text-right pa-2"
                
              >
                  
              </v-img>
</div>
  
</template>

<script>
export default {

    computed: {
        kresba () {
            return this.$store.getters['global/getKresby'].find(kresba => kresba.id== this.$route.params.id)
        }
    }

}
</script>

<style>

</style>