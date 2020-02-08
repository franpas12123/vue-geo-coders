<template>
  <v-list-item>
    Message
    <v-list-item-avatar>
      <v-img>
        <v-icon>mdi-account</v-icon>
      </v-img>
    </v-list-item-avatar>
    <v-list-item-content v-text="msg"></v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "Messages",
  props: ["msg"]
};
</script>

<style>
</style>