<template>
  <v-container>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <v-list-item-title>title1</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>title2</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>title3</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
    <v-app-bar app color="success" dark>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          color="success"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      // drawer: false
    };
  }
};
</script>

<style>
</style>