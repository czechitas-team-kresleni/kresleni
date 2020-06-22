<template>
<v-model>
    <div class="d-flex mb-2" style="align-items: center">
        <v-avatar
            size="55px">
                <img
                class="mr-2"
                alt="Avatar"
                v-bind:src="user.foto"
                >     
        </v-avatar>

        <span class="clickable" 
        @click="goToProfile">{{user.name}}
        </span>
    </div>

    <v-img
        :src="kresba.link" 
        height="500"
        class="text-right pa-2"
        >           
    </v-img>

    <v-icon v-on:click="like" >
         {{ hasLiked ? 'mdi-heart' : 'mdi-heart-outline' }}
        <v-btn icon dark>

        </v-btn>
     </v-icon> {{ kresba.likes }}
</v-model>
  
</template>

<script>
export default {

    computed: {
        kresba () {
            return this.$store.getters['global/getKresby'].find(kresba => kresba.id == this.$route.params.id);
        },
        hasLiked() {
            return this.$store.getters['global/hasLiked'](this.kresba.id, 1);
        }
    },

    created() {
        this.user = this.$store.getters['global/getUsers'].find(user => user.id == this.kresba.user_id);
    },

    methods: {
        goToProfile() {
            this.$router.push('/profil/' + this.user.id);
        },
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
        }
    }

}
</script>

<style>
.clickable {
        cursor: pointer
    }
</style>