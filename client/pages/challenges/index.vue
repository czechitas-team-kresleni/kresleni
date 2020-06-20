<template>
<div>
    <h1> Předchozí výzvy</h1>
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
            return this.$store.getters['global/getKresby'].filter(kresba => kresba.game_id === game_id);
        }
    }

}
</script>

<style>

</style>