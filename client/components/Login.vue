<template>
  <v-app>
      <v-card width="400" class="mx-auto mt-5">
          <v-card-title>
             <h1 class="display-1">Přihlášení</h1> 
          </v-card-title>
          <v-card-text>
              <v-form>
                  <v-text-field label="Uživatel"
                  prepend-icon="mdi-acount-circle"
                   />
                  <v-text-field 
                  v-bind:type="showPassword ? 'text' : 'password'" 
                  label="Heslo"
                  prepend-icon="mdi-lock"
                  v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"  
                  @click:append="showPassword = !showPassword"
                   />
              </v-form>
          </v-card-text>
          <v-divider> </v-divider>
          <v-card-actions>
              <v-btn color="grey"> Registrovat </v-btn>
              <v-spacer> </v-spacer>
              <v-btn color="red"> Přihlásit </v-btn>
          </v-card-actions>
      </v-card>
  </v-app>    
</template>

<script>
export default {
    data (){
        return {
            showPassword: false
        }
    }

}
</script>

<style>

</style>