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
        <v-toolbar-title>GeoCoders</v-toolbar-title>
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
.v-toolbar__title {
  font-size: 1.5rem;
}
</style>