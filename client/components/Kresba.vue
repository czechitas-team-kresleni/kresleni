<template>
<div>


    <div class="d-flex mb-2" style="align-items: center">
<v-avatar
                  size="36px"
                >
                  <img
                  class="mr-2"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  
     </v-avatar>
    <span>{{user.name}}</span>
    </div>
    

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
     </v-icon> {{ kresba.likes }}
 </div>           
</template>

<script>
export default {
    
    props: {
        kresba: {
            type: Object,
            default: {}
        }
    }, 
    

    data() {
        return {
            active: false,
            count: 4,
            user: {}
        }
        
    },

    created() {
        this.user = this.$store.getters['global/getUsers'].find(user => user.id == this.kresba.user_id)
    }

}
</script>

<style>

</style>