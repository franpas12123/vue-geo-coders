<template>
  <v-container class="ml-3 mr-3 mt-n3 mb-n3">
    SendMessage
    <v-form>
      <v-row>
        <v-textarea rows="1" label="Type a message..." name="message" v-model="message"></v-textarea>
        <v-btn class="mt-2 ml-2" fab small color="success" @click="send">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "SendMessage",
  props: ["name"],
  data() {
    return {
      message: ""
    };
  },
  methods: {
    send: function() {
      if (this.message) {
        alert(`name: ${this.name}\nmsg: ${this.message}\n${Date.now()}`);
        this.message = "";
      }
    }
  }
};
</script>

<style>
</style>