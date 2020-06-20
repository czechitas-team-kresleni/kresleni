<template>
  <div>
    <login />
    <div>
      <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>

    <v-row align="center">
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn depressed small>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed small color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed small color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn depressed small disabled>Disabled</v-btn>
        </div>
      </v-col>
    </v-row>

    <div class="mt-5">cau</div>
  </div>
</template>

<script>
import Login from '../../components/Login.vue';

    export default {
        name: "cau",

        components: {
          login: Login
        }
    }
</script>

<style scoped>

</style>
