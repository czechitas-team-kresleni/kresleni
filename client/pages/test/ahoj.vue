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
              items: this.$store.getters['test/getItems'],
          }
        },

        async fetch() {
          await this.$store.dispatch('test/fetchItems').then((resp) => {
            this.items = resp;
            console.log(resp)
          });
        }

    }
</script>

<style scoped>

</style>
