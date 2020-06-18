<template>
    <div>
      ahoj

      <div v-for="item in items" :key="item.id">
        <s>{{ item.name }}</s>
      </div>

    </div>
</template>

<script>


    export default {
        layouts: 'default',
        name: "ahoj",

        data() {
          return {
              // items: this.$store.getters['test/getItems'],
              items_2: [],
          }
        },

        async fetch() {
          // await this.$store.dispatch('test/fetchItems').then((resp) => {
          //   this.items = resp;
          //   console.log(resp)
          // });

          this.$axios.get('')
        }

    }
</script>

<style scoped>

</style>
