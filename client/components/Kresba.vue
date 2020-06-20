<template>
<div>

    <p>Uživatel</p>

  <v-item >
              <v-img
                :src="`https://picsum.photos/500/300`"
                height="150"
                class="text-right pa-2"
                
              >
                  
              </v-img>
    </v-item>
    <v-icon @click="active = !active" >
         {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
        <v-btn
            icon
             dark
                >
        </v-btn>
     </v-icon> {{ count }}
 </div>           
</template>

<script>
export default {
    data() {
        return {
            active: false,
            count: 4,
        }
    }
}
</script>

<style>

</style>