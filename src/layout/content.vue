<template>
  <v-container fill-height fluid>
    <Login v-if="!loggedIn" />
    <Welcome />
  </v-container>
</template>

<script>
import Login from "@/views/Login";
import Welcome from "@/components/Welcome";

export default {
  name: "Content",

  components: {
    Welcome,
    Login
  },

  data: () => ({
    loggedIn: true
  }),
  created() {}
};
</script>
