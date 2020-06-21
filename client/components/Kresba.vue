<template>
<div>


    <div class="d-flex mb-2" style="align-items: center">
<v-avatar
                  size="36px"
                >
                  <img
                  class="mr-2"
                    alt="Avatar"
                    v-bind:src="user.foto"
                  >
                  
     </v-avatar>
    <span>{{user.name}}</span>
    </div>
    

  <v-item >
              <v-img
                :src="`https://picsum.photos/500/300`"
                height="150"
                class="text-right pa-2 clickable"
                v-on:click='redirect'
              >
                  
              </v-img>
    </v-item>
    <v-icon v-on:click="like" >
         {{ hasLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
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

    methods: {
        like() {
            if(!this.hasLiked) {
                this.$store.dispatch('global/like', {
                    kresba_id: this.kresba.id,
                    user_id: 1
                });
            } else {
                this.$store.dispatch('global/dislike', {
                    kresba_id: this.kresba.id,
                    user_id: 1
                });
            }
        },
        redirect() {
            return this.$router.push('/kresba/' + this.kresba.id)
        }
    },

    computed: {
        hasLiked() {
            return this.$store.getters['global/hasLiked'](this.kresba.id, 1)
        }
    },

    created() {
        this.user = this.$store.getters['global/getUsers'].find(user => user.id == this.kresba.user_id)
    }

}
</script>

<style>
    .clickable {
        cursor: pointer
    }
</style>