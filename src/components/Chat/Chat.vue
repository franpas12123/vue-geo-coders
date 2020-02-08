<template>
  <v-row justify="center" style="margin-left: 0">
    Chat
    <v-col xl="8" lg="10" md="12">
      <v-row>
        <v-col cols="3" class="d-none d-md-flex">
          <ChatUsers :name="this.name" />
        </v-col>
        <v-col cols="9" class="mx-auto">
          <v-card>
            <v-card-title>
              <span class="display-1">Name: {{this.name}}</span>
            </v-card-title>
            <!-- <v-card-text> -->
            <MessageList />
            <!-- </v-card-text> -->
            <v-divider></v-divider>
            <v-card-actions>
              <SendMessage :name="name" />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import ChatUsers from "./ChatUsers";
import SendMessage from "./Messages/SendMessage";
import MessageList from "./Messages/MessageList";

export default {
  name: "Chat",
  props: ["name"],
  components: { ChatUsers, SendMessage, MessageList },
  data() {
    return {};
  },
  created() {
    const name = this.$route.params.name;
    if (name) {
      this.name = name;
    } else {
      alert("No name given");
      // this.$router.push({ name: "welcome" });
    }
  }
  // beforeEnter: (to, from, next) => {
  //   if (!to.params.name) {
  //     alert("restricted");
  //     this.$router.push({ name: "welcome" });
  //   } else {
  //     next();
  //   }
  // }
};
</script>

<style>
.date {
  display: block;
}
</style>