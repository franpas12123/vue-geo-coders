<template>
  <v-container class="ml-3 mr-3 mt-n3 mb-n3">
    <!-- SendMessage -->
    <v-form>
      <v-row>
        <v-textarea rows="1" label="Type a message..." name="message" v-model="newMessage"></v-textarea>
        <v-btn class="mt-2 ml-2" fab small color="success" @click="send">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { firestore } from "@/firebase/firebase";

export default {
  name: "SendMessage",
  props: ["name"],
  data() {
    return {
      newMessage: ""
    };
  },
  methods: {
    send: function() {
      if (this.newMessage) {
        firestore
          .collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            alert(err);
          });
        alert(`name: ${this.name}\nmsg: ${this.newMessage}\n${Date.now()}`);
        this.newMessage = "";
      }
    }
  }
};
</script>

<style></style>
