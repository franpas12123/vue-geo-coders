<template>
  <v-app>
    <Header v-if="loggedIn" />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import Content from "./layout/content";
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    loggedIn: true
  }),
  created() {}
};
</script>
