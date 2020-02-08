<template>
  <v-container>
    MessageList
    <v-list style="max-height: 50vh" class="overflow-y-auto" scrollable>
      <v-list-tile avatar v-for="(msg) in messages" :key="msg">
        <!-- <v-list-tile-content> -->
        <Messages :msg="msg" />
        <!-- </v-list-tile-content> -->
      </v-list-tile>
    </v-list>
    <!-- <v-card-text v-for="(msg) in messages" :key="msg">
    </v-card-text>-->
  </v-container>
</template>

<script>
import Messages from "./Messages";

export default {
  name: "MessageList",
  data() {
    return {
      messages: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris quis ante id dui porttitor fermentum.",
        "Vestibulum eget nisl non enim aliquam scelerisque sed vitae erat.",
        "Nam a urna ut mi hendrerit consectetur.",
        "Integer molestie neque eu semper egestas.",
        "Pellentesque id neque sed ligula condimentum auctor.",
        "Morbi mattis sem nec felis lacinia aliquet.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Mauris quis ante id dui porttitor fermentum.",
        "Vestibulum eget nisl non enim aliquam scelerisque sed vitae erat.",
        "Nam a urna ut mi hendrerit consectetur.",
        "Integer molestie neque eu semper egestas.",
        "Pellentesque id neque sed ligula condimentum auctor.",
        "Morbi mattis sem nec felis lacinia aliquet."
      ]
    };
  },
  components: {
    Messages
  }
};
</script>

<style>
</style>