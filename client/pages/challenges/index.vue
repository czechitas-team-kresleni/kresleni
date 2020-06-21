<template>
<div>
    <h2 style="text-align: center; font-weight: 400;"> Předchozí výzvy</h2>
<blockquote class="blockquote">Our constantly changing drawing challenge themes and art prompts are guaranteed to get you outside of your comfort zone while helping you sharpen your skills, gain exposure, and win awesome prizes from our partners. From doodling on coffee cups, to illustrating strangers, explore just how much you can push your creative limits!</blockquote>

<hr>
<radek v-for="game in games" 
    :game="game" 
    :key="game.id" 
    :title="game.name" 
    :kresby='getKresby(game.id)'></radek>


</div>
  
</template>

<script>
import Radek from '../../components/Radek.vue';

export default {
    
    name: "challenges",
    layout: "default",

    components: {
        radek: Radek
    },

    data() {
        return {
            games: []
        }
    },

    created() {
        this.games = this.$store.getters['global/getGames'];
    },

    methods: {
        getKresby(game_id) {
            let kresby= this.$store.getters['global/getKresby'].filter(kresba => kresba.game_id === game_id);
            if (kresby.length > 6) {
                return kresby.slice(5);
            } 
            return kresby;

        }
    }

}
</script>

<style>

</style>