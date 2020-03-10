<template>
  <v-list-item
    class="mb-2"
    :class="[getUser === name ? 'justify-end' : 'justify-start']"
  >
    <!-- <v-list-item> -->
    <!-- Message -->
    <v-list-item-avatar v-if="getUser != name" size="36">
      <v-img>
        <v-icon>mdi-account</v-icon>
      </v-img>
    </v-list-item-avatar>
    <!-- <v-list-item-content v-text="date"></v-list-item-content> -->
    <!-- <v-spacer v-if="getUser === name"></v-spacer> -->
    <v-list-item-content
      class="message"
      v-text="content"
      :class="[getUser === name ? 'white--text primary' : 'white--text grey']"
    ></v-list-item-content>
    <!-- <v-list-item-subtitle
      class=""
      :class="[getUser === name ? 'white--text primary' : 'white--text grey']"
      >{{ date }}</v-list-item-subtitle
    > -->
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Messages',
  props: ['content', 'date', 'name'],
  computed: {
    ...mapGetters(['getUser'])
  }
};
</script>

<style>
.message {
  padding: 14px;
}
</style>
