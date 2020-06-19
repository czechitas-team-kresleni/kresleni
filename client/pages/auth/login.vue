<template>
  <div>
      <div>
        <label>Username</label>
        <input type="text" v-model="login.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button @click="userLogin">Submit</button>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async userLogin() {
        try {
          let response = await this.$auth.loginWith('local', { data: this.login })
          console.log(response)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
